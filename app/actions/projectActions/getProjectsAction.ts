"use server";

import { createApiClient } from "@/app/heplers/apiClient";
import handleApiError from "@/app/heplers/handleErrors";
import { setAuthorizationHeaders } from "@/app/heplers/setAuthorizationHeaders";
import axios from "axios";





export async function getProjectsAction(userId :string){

    try {
        if(!userId) {
            return {success:false,error:"User ID is required"};
    
        }
        const apiClient = await createApiClient()
        const response = await apiClient.get(`/api/v1/projects?user_id=${userId}`)
        if(response.status !== 200){
            throw new Error(`Failed to fetch projects`);
        }
        return {success:true,data:response.data}
    } catch (error) {
        const errorMessage = handleApiError(error)
        console.error("Error fetching projects:", error);
        return {success:false,error:errorMessage}
        
    }
}