"use server";

import { createApiClient } from "@/app/heplers/apiClient";
import handleApiError from "@/app/heplers/handleErrors";



export async function deleteTeamAction(teamId: string) {
    try {
        if (!teamId) {
            throw new Error("Team ID is required");
        }
        const apiClient = await createApiClient()
        const response = await apiClient.delete(`/api/v1/teams/${teamId}`)
        if(response.status !== 200) {
            throw new Error("Failed to delete team");
        }
        return {success:true}
    } catch (error) {
        const errorMessage = handleApiError(error)
        return {success:false, error: errorMessage}
    }
}