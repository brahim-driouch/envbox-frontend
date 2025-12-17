"use server"
import validateLoginInput from "@/app/heplers/validateLoginInput";
import { IUserLoginPayload } from "@/types/userTypes";
import axios, { isAxiosError } from "axios";
import { cookies } from "next/headers";

export async function loginUserAction(formData: IUserLoginPayload) {
    try {
        const { errors, hasError } = validateLoginInput(formData);

        if (hasError) {
            throw new Error(errors?.join(";"));
        }

        const response: { data: {data:{token: string, message: string }}  } = await axios.post(
            `${process.env.API_URL}/api/v1/users/login`,
            formData,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        if (response && response.data) {
            const cookieStore = await cookies();
            
            // Set expiration to 5 hours from now
            const expiresDate = new Date();
            expiresDate.setHours(expiresDate.getHours() + 5);
            cookieStore.set("envbox_auth", response.data.data.token, {
                path: "/",
                expires: expiresDate,  // Use Date object
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // HTTPS only in production
                sameSite: 'lax' // Add sameSite for better security
            });
        }

        return { success: true, message: response.data.data.message };

    } catch (error) {
        if (isAxiosError(error)) {
            return { success: false, error: error.response?.data.error || "An error occurred" };
        }
        const errorMessage = error instanceof Error ? error.message : "An error occurred";
        return { success: false, error: errorMessage };
    }
}