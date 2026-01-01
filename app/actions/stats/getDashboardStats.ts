"use server";

import handleApiError from "@/app/heplers/handleErrors";
import { setAuthorizationHeaders } from "@/app/heplers/setAuthorizationHeaders";
import axios from "axios";



export async function getDashboardStats(id: string) {
    try {
        const authHeaders = await setAuthorizationHeaders()
        const response = await axios.get(`${process.env.API_URL}/api/v1/users/${id}/stats`, {
            headers: {
                'Content-Type': 'application/json',
                ...authHeaders
            },
            withCredentials: true
        });
 
       if(response.status !== 200){
        throw new Error(response.data.error || 'Failed to fetch dashboard stats');
       }
       return {success:true, data: {
        projectsCount:response.data.stats.projects_count,
        teamsCount: response.data.stats.teams_count,
        membersCount: response.data.stats.members_count,
        envVarsCount:response.data.stats.env_vars_counts
       }};
    } catch (error) {
        const errorMessage = handleApiError(error)
        console.error('Error fetching dashboard stats:', error);
        return {success: false, error: errorMessage};
    }
}