"use server";

import { createApiClient } from "@/app/heplers/apiClient";
import handleApiError from "@/app/heplers/handleErrors";
import { ApiResponse } from "@/types/api";
import { Team } from "@/types/team";

export async function getUserTeamsAction(
  userId: string
): Promise<ApiResponse<Team[]>> {
  if (!userId) {
    throw new Error("user ID is required");
  }
  try {
    const apiClient = await createApiClient();
    const response = await apiClient.get(`/api/v1/teams?user_id=${userId}`);
    if(response.status !== 200) {
      throw new Error("Failed to fetch teams");
    }
    return { success: true, data: response.data as Team[] };
  } catch (error) {
    const errorMessage = handleApiError(error);
    console.log("Error getting user teams @getUserTeamsAction:", error);
    return { success: false, error: errorMessage };
  }
}
