"use server";

import { createApiClient } from "@/app/heplers/apiClient";
import handleApiError from "@/app/heplers/handleErrors";
import { ApiResponse } from "@/types/api";
import { Contributor } from "@/types/contributor";




export async function getContriubutorByIdAction(contributorId: string): Promise<ApiResponse<Contributor>> {
  try {
     if(!contributorId) {
        throw new Error("Contributor ID is required");
     }
     const apiClient = await createApiClient()
     const response = await apiClient.get(`/api/v1/contributors/${contributorId}`)
     if(response.status !== 200) {
        throw new Error("Failed to fetch contributor");
     }
     return {
        success: true,
        data: response.data.contributor as Contributor
     }
  } catch (error) {
    const errorMessage = handleApiError(error)
    console.error("Error fetching contributor @getContributorByIdAction:", errorMessage);
     return {
        success: false,
        error: errorMessage
     }
  }   
}