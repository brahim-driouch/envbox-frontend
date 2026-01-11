"use server";

import { createApiClient } from "@/app/heplers/apiClient";
import handleApiError from "@/app/heplers/handleErrors";
import { ApiResponse } from "@/types/api";
import { Contributor } from "@/types/contributor";



export async function getContributorsAction(userId:string):Promise<ApiResponse<Contributor[]>> {
 
    
    try {
        if(!userId){
            throw new Error("User ID is required");
        }
        
       const client = await createApiClient();
       const response = await client.get(`/api/v1/contributors?user_id=${userId}`);
       if(response.status !== 200){
        throw new Error("Failed to get contributors");
       }
       return {
        success:true,
        data:response.data.contributors as Contributor[]
       }
        
    } catch (error) {
        const errorMessage =  handleApiError(error)
        console.error("Error getting contributors @getContributorsAction:", error);
       return {
        success:false,
        error:errorMessage
       }
    }
}


