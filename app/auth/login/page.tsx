"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, Lock, ArrowRight, Sparkles, Shield } from "lucide-react";
import { useUserLogin } from "@/app/hooks/auth/useUserLogin";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";

export default function LoginPage() {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const mutation = useUserLogin();
  const queryClient = useQueryClient();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await mutation.mutateAsync(formdata);
      
      if (!response.success && response.error) {
        toast.error(response.error);
        return;
      }
      
      if (response && response?.message) {
        toast.success(response?.message);
        await queryClient.invalidateQueries({ queryKey: ['auth'] });
        router.push("/in");
      }
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
        return;
      }
      toast.error("An error occurred");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-float" />
      <div className="absolute top-40 right-40 w-1 h-1 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-xl relative z-10 animate-fade-in">
        {/* Main container */}
        <div className="relative bg-zinc-950 border-4 border-zinc-800 p-10 md:p-12 shadow-[8px_8px_0px_0px_rgba(16,185,129,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(16,185,129,0.4)] transition-all duration-300">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-emerald-400" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-emerald-400" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-cyan-400" />

          {/* Header badge */}
          <div className="flex justify-center mb-8 animate-slide-up">
            <div className="inline-flex items-center gap-3 bg-black border-2 border-emerald-500 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]">
              <Shield className="w-5 h-5 text-emerald-400 animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest text-white font-mono">
                Secure Login
              </span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Welcome
            <span className="block mt-2 bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Back
            </span>
          </h1>
          
          <p className="text-zinc-400 mb-10 text-center font-mono text-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Sign in to manage your environment variables
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3 font-mono">
                Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-emerald-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formdata.email}
                  onChange={handleChange}
                  className="w-full bg-black border-2 border-zinc-700 pl-12 pr-4 py-4 text-white font-mono focus:border-emerald-400 focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3 font-mono">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-emerald-400 transition-colors" />
                <input
                  type="password"
                  name="password"
                  required
                  value={formdata.password}
                  onChange={handleChange}
                  className="w-full bg-black border-2 border-zinc-700 pl-12 pr-4 py-4 text-white font-mono focus:border-emerald-400 focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Forgot password link */}
            <div className="flex justify-end animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Link 
                href="/forgot-password" 
                className="text-sm text-zinc-500 hover:text-emerald-400 font-mono transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
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
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Sign up link */}
          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <p className="text-zinc-500 font-mono text-sm text-left">
              {" Don't have an account?"}{" "}
              <Link 
                href="/auth/register" 
                className="text-emerald-400  hover:text-emerald-300 font-bold underline decoration-2 underline-offset-4 transition-colors"
              >
                Create one
              </Link>
              <br/>
              {" Didn't receive the verification email?"}{" "}
              <Link 
                href="/auth/resend-verification" 
                className="text-emerald-400 hover:text-emerald-300 font-bold underline decoration-2 underline-offset-4 transition-colors"
              >
                Resend email
              </Link>
            </p>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-zinc-600 font-mono text-xs uppercase">
                Secure & Encrypted
              </span>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-emerald-400 via-cyan-400 to-emerald-400" />
        </div>
      </div>
    </div>
  );
}