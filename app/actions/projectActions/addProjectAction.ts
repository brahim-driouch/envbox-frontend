"use server";
import handleApiError from "@/app/heplers/handleErrors";
import { setAuthorizationHeaders } from "@/app/heplers/setAuthorizationHeaders";
import { CreateProject } from "@/types/project";
import axios from "axios";

export async function addProjectAction(projectData: CreateProject) {
   try {
    if (!projectData.name || projectData.name.trim().length < 2) {
      return { success: false, error: 'Project name is required and must be at least 2 characters long' };
    }
    const authHeaders = await setAuthorizationHeaders();
    const response = await axios.post(`${process.env.API_URL}/api/v1/projects`, projectData, {
      headers: {
        'Content-Type': 'application/json',
        ...authHeaders
      },
      withCredentials:true
    });
    if (response.status !== 201) {
      return { success: false, error: 'Failed to add project' };
    }
    return { success: true, message: response.data.message };
   } catch (error) {
    const errorMessage = handleApiError(error)
     console.error('Error adding project:', error);
     return { success: false, error: errorMessage };
   }
    
}