"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { User, Mail, Lock, ArrowRight, Sparkles, Shield, CheckCircle2 } from "lucide-react";
import { useUserRegister } from "@/app/hooks/useUserRegister";
import toast from "react-hot-toast";
import Link from "next/link";

export default function RegisterPage() {
  const [errors, setErrors] = useState<string[]>([]);
  const [formdata, setFormdata] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const mutation = useUserRegister();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors([]);

    try {
      const response = await mutation.mutateAsync(formdata);
      
      if (!response.success && response.error) {
        toast.error(response.error);
        return;
      }
      
      if (response && response?.message) {
        toast.success(response?.message);
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
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Floating particles */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-float" />
      <div className="absolute top-40 left-40 w-1 h-1 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-xl relative z-10 animate-fade-in">
        {/* Main container */}
        <div className="relative bg-zinc-950 border-4 border-zinc-800 p-10 md:p-12 shadow-[8px_8px_0px_0px_rgba(168,85,247,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(168,85,247,0.4)] transition-all duration-300">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-emerald-400" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-purple-400" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-emerald-400" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-purple-400" />

          {/* Header badge */}
          <div className="flex justify-center mb-8 animate-slide-up">
            <div className="inline-flex items-center gap-3 bg-black border-2 border-purple-500 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.5)]">
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest text-white font-mono">
                Join envbox
              </span>
              <Shield className="w-4 h-4 text-purple-400" />
            </div>
          </div>

          {/* Error messages */}
          {errors.length > 0 && (
            <div className="mb-6 bg-red-500/10 border-2 border-red-500 p-4 animate-slide-up">
              {errors.map((err) => (
                <div key={err} className="flex items-start gap-2 text-red-400 font-mono text-sm mb-2 last:mb-0">
                  <span className="text-red-500 font-bold">×</span>
                  <span>{err}</span>
                </div>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Create
            <span className="block mt-2 bg-linear-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Account
            </span>
          </h1>
          
          <p className="text-zinc-400 mb-10 text-center font-mono text-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Start managing your environment variables securely
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3 font-mono">
                Full Name
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-emerald-400 transition-colors" />
                <input
                  type="text"
                  name="fullname"
                  required
                  value={formdata.fullname}
                  onChange={handleChange}
                  className="w-full bg-black border-2 border-zinc-700 pl-12 pr-4 py-4 text-white font-mono focus:border-emerald-400 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3 font-mono">
                Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formdata.email}
                  onChange={handleChange}
                  className="w-full bg-black border-2 border-zinc-700 pl-12 pr-4 py-4 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3 font-mono">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="password"
                  name="password"
                  required
                  value={formdata.password}
                  onChange={handleChange}
                  className="w-full bg-black border-2 border-zinc-700 pl-12 pr-4 py-4 text-white font-mono focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3 font-mono">
                Confirm Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="password"
                  name="confirm_password"
                  required
                  value={formdata.confirm_password}
                  onChange={handleChange}
                  className="w-full bg-black border-2 border-zinc-700 pl-12 pr-4 py-4 text-white font-mono focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Password requirements */}
            <div className="bg-zinc-900 border-2 border-zinc-800 p-4 animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 font-mono">
                Password Requirements:
              </p>
              <ul className="space-y-2">
                <PasswordRequirement text="At least 8 characters" />
                <PasswordRequirement text="One uppercase letter" />
                <PasswordRequirement text="One number or symbol" />
              </ul>
            </div>

            {/* Submit Button */}
            <button
              disabled={mutation.isPending}
              type="submit"
              className={`group w-full py-4 text-lg font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 animate-slide-up ${
                mutation.isPending
                  ? "bg-zinc-700 text-zinc-500 cursor-not-allowed border-2 border-zinc-600"
                  : "bg-linear-to-r from-emerald-400 via-cyan-400 to-purple-400 text-black hover:from-emerald-300 hover:via-cyan-300 hover:to-purple-300 shadow-[6px_6px_0px_0px_rgba(168,85,247,1)] hover:shadow-[4px_4px_0px_0px_rgba(168,85,247,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px]"
              }`}
              style={{ animationDelay: '0.8s' }}
            >
              {mutation.isPending ? (
                <>
                  <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Sign in link */}
          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <p className="text-zinc-500 font-mono text-sm">
              Already have an account?{" "}
              <Link 
                href="/auth/login" 
                className="text-purple-400 hover:text-purple-300 font-bold underline decoration-2 underline-offset-4 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-zinc-600 font-mono text-xs uppercase">
                Free Forever
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              <span className="text-zinc-600 font-mono text-xs uppercase">
                No Credit Card
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
              <span className="text-zinc-600 font-mono text-xs uppercase">
                Secure & Encrypted
              </span>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-emerald-400 via-cyan-400 to-purple-400" />
        </div>
      </div>
    </div>
  );
}

// Password Requirement Component
function PasswordRequirement({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
      <span>{text}</span>
    </li>
  );
}