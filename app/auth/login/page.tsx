"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, Lock, MoveUpLeftIcon } from "lucide-react";
import { useUserLogin } from "@/app/hooks/useUserLogin";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [errors, setErrors] = useState<string[]>([]);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const mutation = useUserLogin();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setErrors([]);

  try {
    const response = await mutation.mutateAsync(formdata);
    
    // Check if the response indicates an error
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
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-lg border border-gray-100">
        
       
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
        <p className="text-gray-600 mb-8">
          Sign in to manage your environment variables
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                required
                value={formdata.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 pl-10 pr-4 py-3 focus:border-blue-500 focus:ring-0"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                name="password"
                required
                value={formdata.password}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 pl-10 pr-4 py-3 focus:border-blue-500 focus:ring-0"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            disabled={mutation.isPending}
            type="submit"
            className={`${
              mutation.isPending
                ? "bg-gray-500"
                : "bg-gray-900 hover:bg-gray-800"
            } w-full rounded-lg py-3 text-white font-medium transition-colors`}
          >
            {mutation.isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="font-medium text-blue-600 hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
