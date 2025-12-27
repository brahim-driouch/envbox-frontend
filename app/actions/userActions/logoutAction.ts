"use server";

import handleApiError from "@/app/heplers/handleErrors";
import axios from "axios";
import { cookies, headers } from "next/headers";



export async function logoutAction(){
            const cookieStore = await cookies()

    try {
        const refreshToken = cookieStore.get("nvstash_ref_token")?.value
        await axios.post(`${process.env.API_URL}/api/v1/auth/logout`,{}, {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${refreshToken}`
            }
        })
     
    
            
        
    } catch (error) {
       const errorMessage = handleApiError(error)
        console.log("Logout error:", errorMessage);
    }
             cookieStore.delete("nvstash_ref_token")
             cookieStore.delete("nvstash_acc_token")
            return {success: true}
}