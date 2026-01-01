"use server";

import handleApiError from "@/app/heplers/handleErrors";
import axios from "axios";

export async function validateAccountAction(token: string) {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/api/v1/auth/verify?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
   console.log("Validation response:", response.data);
    if (response.status === 200) {
      return { success: true,message: response.data.message };
    }
    throw new Error("Account verification failed");
  } catch (error) {
    const errorMessage = handleApiError(error);
    console.log("Email Validation error:", errorMessage);
    return { success: false, error: errorMessage };
  }
}
