import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSessionAction } from './app/actions/userActions/getSessionAction';
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const url = new URL(request.url);
    const isProtected = url.pathname.startsWith("/in");
    const isAuthRoutes = url.pathname === '/auth/login' || url.pathname === '/auth/register';
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("nvstash_ref_token")?.value;
    const hasRefreshToken = !!refreshToken;
    // Check if this is a protected route that requires authentication
    if (isProtected && !isAuthRoutes) {
        
        if(!hasRefreshToken){
       cookieStore.delete("nvstash_acc_token");
          return NextResponse.redirect(new URL("/auth/login", request.url));
        }
    }

    // if user is already authenticated , redirect to dashboard
    if (isAuthRoutes && hasRefreshToken) {
        return NextResponse.redirect(new URL("/in", request.url));
    }
    
  return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
