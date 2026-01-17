"use server";

import { createApiClient } from "@/app/heplers/apiClient";
import handleApiError from "@/app/heplers/handleErrors";
import { ApiResponse } from "@/types/api";
import { Team } from "@/types/team";




export async function getTeamByIdAction(teamId:string):Promise<ApiResponse<Team>>{
    if(!teamId){
        throw new Error("Team ID is required");
    }
    try {
        const apiClient = await createApiClient()
        const response = await apiClient.get(`/api/v1/teams/${teamId}`)
        if(response.status !== 200){
            throw new Error("Failed to get team")
        }
        return {
            success:true,
            data:response.data.team as Team
        }
        
    } catch (error) {
        const errorMessage = handleApiError(error)
        console.log("Failed to get team by id @getTeamByIdAction:",errorMessage)
        return {
            success:false,
            
        }
    }
}