"use server"

import axios from "axios"
import { cookies } from "next/headers";



export async function getSessionAction() {
    try {
        // call session api
        const cookieStore= await cookies()
        const accessToken = cookieStore.get("nvstash_acc_token")
        if(!accessToken || !accessToken.value) {
            return {user:null,isAuthenticated:false}
        }
        const response = await axios.get(`${process.env.API_URL}/api/v1/auth/session`,{
            headers:{
                "Authorization": `Bearer ${accessToken.value}`
            },
            withCredentials:true
        });
        
        if (response.status !== 200) {
            return { isAuthenticated: false, user: null };
        }
        return { isAuthenticated: true, user: response.data.user };
    } catch (error) {
        return { user: null, isAuthenticated: false };
    }
    
}