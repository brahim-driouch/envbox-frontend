"use server";

import axios from "axios";
import { setAuthorizationHeaders } from "./setAuthorizationHeaders";



export async function  createApiClient(){
    const authHeaders = await setAuthorizationHeaders()


    const client = axios.create({
        baseURL:process.env.API_URL,
        headers:{
            "Content-Type":"application/json",
            ...authHeaders
        }
    })
    return  client
}