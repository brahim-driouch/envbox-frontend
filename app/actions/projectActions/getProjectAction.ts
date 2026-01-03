"use server"

import { createApiClient } from "@/app/heplers/apiClient";
import handleApiError from "@/app/heplers/handleErrors";
import { ApiResponse } from "@/types/api";
import { Project } from "@/types/project";


export async function getProjectAction(projectId:string): Promise<ApiResponse<Project | null>>{
  
    try {
        const client= await createApiClient()
        const response = await client.get(`/api/v1/projects/${projectId}`)
        if(response.status !== 200) {
           throw new Error(" Failed to fetch project")
        }
       return {
        success:true,data:response.data.project as Project
       }
    } catch (error) {
        const errMessage = handleApiError(error)
        console.log("Error fetching project- getProjectAction",error)
        return {
            success:false,
            data:null,
            message: errMessage || "Failed to fetch project"
        }
    }
    
}