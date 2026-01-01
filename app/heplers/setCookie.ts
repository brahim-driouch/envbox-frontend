"use server"

import { cookies } from "next/headers"


export async function setCookie(accessToken:string,minutes:number){

    try {
            const accessTokenExpires = new Date(Date.now() + minutes * 60 * 1000)
            const cookieStore = await cookies()
            cookieStore.set("nvstash_acc_token", accessToken, {
                path: "/",
                expires: accessTokenExpires,
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                domain: process.env.NODE_ENV === "production" ? ".envbox.ai" : undefined,
            })
            
            return { success: true };
        } catch (error) {
            console.error("Error setting cookie:", error);
            return { success: false, error: "Failed to set cookie" };
        }
    }