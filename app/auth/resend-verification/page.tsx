"use client";

import handleApiError from "@/app/heplers/handleErrors";
import { useResendVerification } from "@/app/hooks/auth/use-resend-verification";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";


export default function ResendVerificationPage() {
    const [email,setEmail]=useState("")
    const mutation = useResendVerification()
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const response = await mutation.mutateAsync(email);
           if (!response.success) {
              toast.error(response.error || "Failed to resend verification email");
              return;
            }
            toast.success(response.message || "Email sent successfully");
        } catch (error) {
           const errorMessage = handleApiError(error);
           toast.error(errorMessage);
           console.error('Error resending verification:', errorMessage);
        }
    }
    
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Resend Verification Email
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={handleChange}
                  className="w-full bg-black border-2 border-zinc-700 pl-12 pr-4 py-4 text-white font-mono focus:border-emerald-400 focus:outline-none transition-colors"
                  placeholder="you@example.com"
          />
          <button
          onClick={handleSubmit}
              disabled={mutation.isPending}
              type="submit"
              className={`group w-full py-4 text-lg font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 animate-slide-up ${
                mutation.isPending
                  ? "bg-zinc-700 text-zinc-500 cursor-not-allowed border-2 border-zinc-600"
                  : "bg-linear-to-r from-emerald-400 to-cyan-400 text-black hover:from-emerald-300 hover:to-cyan-300 shadow-[6px_6px_0px_0px_rgba(16,185,129,1)] hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px]"
              }`}
              style={{ animationDelay: '0.6s' }}
            >
              {mutation.isPending ? (
                <>
                  <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
        </div>
      </div>
    </div>
  );
}