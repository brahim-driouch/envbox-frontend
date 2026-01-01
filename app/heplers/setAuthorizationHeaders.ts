"use server";

import { cookies } from "next/headers";

export async function setAuthorizationHeaders() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("nvstash_acc_token")?.value;
  const refreshToken = cookieStore.get("nvstash_ref_token")?.value;
  

  
  return {
    "Authorization": `Bearer ${accessToken || ""}`,
    "Cookie": `nvstash_ref_token=${refreshToken || ""}`
  };
}