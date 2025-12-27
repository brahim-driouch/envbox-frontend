"use client";

import Link from "next/link"
import { LogIn, LogOut, Rocket } from "lucide-react"
import { useAuth } from "@/app/hooks/useAuth"
import { useRouter } from "next/navigation";
import { logoutAction } from "@/app/actions/userActions/logoutAction";
import { useQueryClient } from "@tanstack/react-query";

const AuthNavBar = () => {
  const router =useRouter()
  const {data} = useAuth();
  const queryClient = useQueryClient();
  const logoutHandler = async()=>{
       await logoutAction()
       await queryClient.invalidateQueries({
        queryKey: ['auth']
       })
       router.push("/")
  }
  return (
    <nav className="relative">
      <ul className="flex flex-col sm:flex-row gap-4">
       {data?.isAuthenticated ? (
          <>
           <LogoutButton onClick={logoutHandler}/>
          </>
       ):
       (
        <>
             {/* Login Link */}
        <li>
          <Link 
            className="group inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border-2 border-zinc-700 text-white font-bold uppercase text-sm tracking-wider hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-[2px_2px_0px_0px_rgba(39,39,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]" 
            href={"/auth/login"}
          >
            <LogIn className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>Login</span>
          </Link>  
        </li>

        {/* Get Started Link */}
        <li>
          <Link 
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-black uppercase text-sm tracking-wider hover:from-emerald-300 hover:to-cyan-300 transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] hover:shadow-[6px_6px_0px_0px_rgba(16,185,129,1)] relative overflow-hidden" 
            href={"/auth/register"}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <Rocket className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
              Get Started
            </span>
          </Link>
        </li>
        </>
       )
       }
      </ul>
    </nav>
  )
}

export default AuthNavBar



// Primary Logout Button (Icon + Text)
 function LogoutButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-3 bg-zinc-900 border-2 border-zinc-700 text-zinc-400 px-6 py-3 font-bold uppercase text-sm tracking-wider hover:border-red-500 hover:text-red-500 hover:bg-red-500/10 transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-[2px_2px_0px_0px_rgba(39,39,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(239,68,68,0.5)]"
    >
      <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      <span>Logout</span>
    </button>
  )
}
