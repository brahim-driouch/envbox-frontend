"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useUserRegister } from "@/app/hooks/useUserRegister";
import validateNewUser from "@/app/heplers/validateNewUser";
import toast from "react-hot-toast";

export default function RegisterPage() {
    const [errors,setErrors]=useState<string[]>([])
  const [formdata, setFormdata] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const mutation = useUserRegister()

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
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
        
            {errors.length >0 && (
                <div className="p-2 bg-red-50 rounded-lg text-red-500">
                {errors.map((err)=>(
                    <span key={err} className="block p-2">
                        {err}
                    </span>
                ))}
                </div>
            )}
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create account</h1>
        <p className="text-gray-600 mb-8">Start managing your environment variables</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="fullname"
                required
                value={formdata.fullname}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 pl-10 pr-4 py-3 focus:border-blue-500 focus:ring-0"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                name="confirm_password"
                required
                value={formdata.confirm_password}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 pl-10 pr-4 py-3 focus:border-blue-500 focus:ring-0"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            disabled={mutation.isPending}
            type="submit"
            className={`${mutation.isPending ? "bg-gray-500 ":" bg-gray-900 hover:bg-gray-800 "} w-full rounded-lg py-3 text-white font-medium  transition-colors`}
          >
           {mutation.isPending ? "Submitting..." : " Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
