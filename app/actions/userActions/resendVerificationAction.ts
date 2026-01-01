"use server"

import handleApiError from "@/app/heplers/handleErrors";
import axios from "axios";



export async function resendVerificationAction(email: string) {
   try {
       if(!email){
        //TODO validate email format
        return {success:false,error:"invalid email"}
       }
       console.log({email})
       const response = await axios.post(`${process.env.API_URL}/api/v1/auth/resend-verification`, { email },{
        headers: {
          'Content-Type': 'application/json',
        }
       });
       console.log("Resend verification response:", response.data);
       if (response.status !== 200) {
           throw new Error("Failed to resend verification");
       }
       return { success: true, message: response.data.message || "Verification email sent successfully" };
   } catch (error: any) {
      const errorMessage = handleApiError(error);
      return { success: false, error: errorMessage || "Failed to resend verification" };
   }
}