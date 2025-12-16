"use server";

import validateNewUser from "@/app/heplers/validateNewUser";
import { ApiResponse } from "@/types/api";
import { IUserRegisterPayload } from "@/types/userTypes";
import axios from "axios";
import { on } from "events";
import { headers } from "next/headers";



export async function registerUser(formData: IUserRegisterPayload) {


  // Validate input
  const validationResullt = validateNewUser(formData);
    if (validationResullt.hasError) {
        return {success: false, errors: validationResullt.errors};
    }
    // Send data to backend API
   try {
     const response = await axios.post(`${process.env.API_URL}/api/v1/users/register`,formData,{
        headers:{
            "Content-Type":"application/json"
        },
        
    })

    return {success: true, errors: null,data:response.data};
    
   } catch (error) {
     if (axios.isAxiosError(error)){
        const errorMessage = error.response?.data.error
        throw new Error(errorMessage)
     }
         throw new Error("An unexpected error occurred");

   }

}