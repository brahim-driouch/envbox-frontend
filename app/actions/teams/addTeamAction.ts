"use server"

import { createApiClient } from "@/app/heplers/apiClient";
import handleApiError from "@/app/heplers/handleErrors";
import { ApiResponse } from "@/types/api";
import { TeamFormData } from "@/types/team";



export async function addTeamAction(team:TeamFormData):Promise<ApiResponse<{id: string}>> {
 
  try {
    if (!team.name.trim()) {
      throw new Error('Team name is required');
    }
    if(team.name.length < 2) {  
      throw new Error('Team name must be at least 2 characters long');
    }
    const apiClient = await createApiClient();
    const response = await apiClient.post('/api/v1/teams', team);
    if (response.status !== 201) {
      throw new Error('Failed to create team');
    }
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = handleApiError(error);
        console.error('Error creating team @addTeamAction:', error);

    return { success: false, error:errorMessage};
  }
  
}