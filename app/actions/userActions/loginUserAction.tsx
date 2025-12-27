"use server";
import validateLoginInput from "@/app/heplers/validateLoginInput";
import { IUserLoginPayload } from "@/types/userTypes";
import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { cookies, headers } from "next/headers";

type LoginServerResponse = {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};
export async function loginUserAction(formData: IUserLoginPayload) {
  try {
    const { errors, hasError } = validateLoginInput(formData);

    if (hasError) {
      throw new Error(errors?.join(";"));
    }
    const requestHeaders = await headers()
    const userAgent = requestHeaders.get("user-agent")
    const ipAddress = requestHeaders.get("x-forwarded-for") || requestHeaders.get("cf-connecting-ip") || requestHeaders.get("x-real-ip")
    console.log(userAgent, ipAddress)
    const response:AxiosResponse<LoginServerResponse> = await axios.post(
      `${process.env.API_URL}/api/v1/auth/login`,
      {
        ...formData,
        ip_address: ipAddress,
        user_agent: userAgent
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response && response.status >=200 && response.status < 300  && response.data) {
      const cookieStore = await cookies();

      // Set expiration to 5 hours from now
     const refreshTokenExpires = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);
 
      // 15 days in milliseconds
const accessTokenExpires = new Date(Date.now() + 15 * 60 * 1000);

      // Set cookies
      cookieStore.set("nvstash_ref_token", response.data.data.refreshToken, {
        path: "/",
        expires: refreshTokenExpires,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        domain: process.env.NODE_ENV === "production" ? ".envbox.ai" : undefined,
      });

      cookieStore.set("nvstash_acc_token", response.data.data.accessToken, {
        path: "/",
        expires: accessTokenExpires,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        domain: process.env.NODE_ENV === "production" ? ".envbox.ai" : undefined,
      });
    }
    return { success: true, message: response.data.message };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        error: error.response?.data?.error || "An error occurred",
      };
    }
    const errorMessage =
      error instanceof Error ? error.message : "An error occurred";
    return { success: false, error: errorMessage };
  }
}
