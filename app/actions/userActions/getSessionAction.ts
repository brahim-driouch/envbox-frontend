"use server"

import handleApiError from "@/app/heplers/handleErrors"
import { setCookie } from "@/app/heplers/setCookie"
import axios, { AxiosError } from "axios"
import { cookies } from "next/headers"
import { LoggedInUser } from "@/types/userTypes";
import { setAuthorizationHeaders } from "@/app/heplers/setAuthorizationHeaders"

type SessionResponse = {
    success: boolean;
    isAuthenticated: boolean;
    user: LoggedInUser | null;
    error?: string;
}

export async function getSessionAction(): Promise<SessionResponse> {
 
    try {
      

     
         const authHeaders = await setAuthorizationHeaders();
        // Call session endpoint
        const response = await axios.get(
            `${process.env.API_URL}/api/v1/auth/session`,
            {
                headers: authHeaders,
                withCredentials: true
            }
        )

        //  Check for new access token in response headers
        const newAccessToken = response.headers["x-new-access-token"]
        
        if (newAccessToken) {
            // Update cookie with new token
        const hasSetCookie = await setCookie(newAccessToken,15)
            if(!hasSetCookie.success){
                return {
                    success:false,
                    isAuthenticated:false,
                    user:null,
                    error:hasSetCookie.error 
                          }
            }
            console.log('Access token refreshed successfully')
        }

        return {
            success: true,
            isAuthenticated: true,
            user: response.data.user
        }

    } catch (error) {
        console.log("Error in getSessionAction:", error);
        const errorMessage = handleApiError(error)
        return {
            success: false,
            isAuthenticated: false,
            user: null,
            error: errorMessage
        };
    }
}