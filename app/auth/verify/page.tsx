import { validateAccountAction } from "@/app/actions/userActions/validateAccountAction";
import Link from "next/link";

type SearchParams = {
  token?: string;
};

export default async function VerifyPage({ 
  searchParams 
}: { 
  searchParams: Promise<SearchParams> 
}) {
  const { token } = await searchParams;

  // Missing token
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="max-w-md w-full p-8 bg-zinc-950 border-4 border-red-500">
          <div className="text-center">
            {/* Icon */}
            <div className="text-6xl mb-6">❌</div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-black uppercase mb-4 text-red-500 tracking-tight">
              Invalid Link
            </h1>
            
            {/* Message */}
            <p className="text-zinc-400 text-sm sm:text-base mb-8 leading-relaxed">
              The verification link is missing or invalid. Please check your email and try again.
            </p>
            
            {/* Action Button */}
            <Link 
              href="/auth/register"
              className="inline-block px-6 py-3 bg-zinc-900 border-2 border-zinc-700 text-zinc-400 font-bold uppercase text-sm tracking-wider hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-[2px_2px_0px_0px_rgba(39,39,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]"
            >
              Register Again
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Verify the token
  const verificationResult = await validateAccountAction(token);

  // Verification failed
  if (!verificationResult.success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="max-w-md w-full p-8 bg-zinc-950 border-4 border-red-500">
          <div className="text-center">
            {/* Icon */}
            <div className="text-6xl mb-6">❌</div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-black uppercase mb-4 text-red-500 tracking-tight">
              Verification Failed
            </h1>
            
            {/* Error Message */}
            <p className="text-zinc-400 text-sm sm:text-base mb-8 leading-relaxed">
              {verificationResult.error || 'Unable to verify your email. The link may have expired.'}
            </p>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/auth/resend-verification"
                className="px-6 py-3 bg-zinc-900 border-2 border-zinc-700 text-zinc-400 font-bold uppercase text-sm tracking-wider hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
              >
                Resend Verification Email
              </Link>
              <Link 
                href="/auth/login"
                className="px-6 py-3 bg-zinc-900 border-2 border-zinc-700 text-zinc-400 font-bold uppercase text-sm tracking-wider hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Try Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Verification success
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-md w-full p-8 bg-zinc-950 border-4 border-emerald-400">
        <div className="text-center">
          {/* Icon */}
          <div className="text-6xl mb-6">✅</div>
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-black uppercase mb-4 text-emerald-400 tracking-tight">
            Email Verified!
          </h1>
          
          {/* Message */}
          <p className="text-zinc-400 text-sm sm:text-base mb-8 leading-relaxed">
            Your account has been successfully verified. You can now log in and start using Envify!
          </p>
          
          {/* CTA Button */}
          <Link 
            href="/auth/login"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-black uppercase text-sm tracking-wider hover:from-emerald-300 hover:to-cyan-300 transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] hover:shadow-[6px_6px_0px_0px_rgba(16,185,129,1)]"
          >
            <span>Go to Login</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}