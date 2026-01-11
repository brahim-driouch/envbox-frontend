"use server"

import { createApiClient } from "@/app/heplers/apiClient"
import handleApiError from "@/app/heplers/handleErrors"
import { ApiResponse } from "@/types/api"
import { ContributorCreate } from "@/types/contributor"

export const addContributorAction = async (data: ContributorCreate):Promise<ApiResponse<null>> => {
    try {
        //TODO VALIDATE DATA
        const apiClient = await createApiClient()
        const response = await apiClient.post('/api/v1/contributors', data)
        if(response.status !== 201) {
            throw new Error('Failed to add contributor')
        }
        return {
            success: true,
            message: 'Contributor added successfully'
        }
    } catch (error) {
        const errorMessage = await handleApiError(error)
        console.log("Error creating contributor @addContributorAction:", errorMessage)
        return {
            success:false,
            message:errorMessage
        }
    }
}