import { Loader2, Shield, Zap } from "lucide-react"

// Full-page loading component
export function LoadingPage() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-float" />
      <div className="absolute top-40 right-40 w-1 h-1 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 inline-flex items-center gap-3 bg-zinc-950 border-4 border-emerald-400 px-8 py-4 shadow-[8px_8px_0px_0px_rgba(16,185,129,0.5)] animate-pulse-slow">
          <Shield className="w-8 h-8 text-emerald-400" />
          <span className="text-4xl font-black text-white uppercase tracking-tight">
            envbox
          </span>
          <Zap className="w-8 h-8 text-cyan-400" />
        </div>

        {/* Spinner */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-24 h-24 border-4 border-zinc-800 rounded-full" />
            
            {/* Spinning ring */}
            <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-emerald-400 border-r-cyan-400 rounded-full animate-spin" />
            
            {/* Inner dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-emerald-400 rounded-full animate-ping" />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <p className="text-zinc-400 font-mono uppercase tracking-widest text-sm animate-pulse">
          Loading...
        </p>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  )
}

// Inline loading component (for use within pages)
export function LoadingInline() {
  return (
    <div className="flex w-full h-screen fixed z-50 items-center justify-center p-8 bg-white/10 backdrop-blur-sm">
      <div className="text-center">
        {/* Spinner */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-zinc-800 rounded-full" />
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-emerald-400 border-r-cyan-400 rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
            </div>
          </div>
        </div>

        <p className="text-zinc-400 font-mono uppercase tracking-widest text-sm">
          Loading...
        </p>
      </div>
    </div>
  )
}

// Small spinner (for buttons, etc.)
export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-3"
  }

  return (
    <div className="inline-flex items-center justify-center">
      <div className={`${sizes[size]} border-zinc-700 border-t-emerald-400 rounded-full animate-spin`} />
    </div>
  )
}

// Card skeleton loader
export function LoadingCard() {
  return (
    <div className="bg-zinc-950 border-4 border-zinc-800 p-6 animate-pulse">
      {/* Header skeleton */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="h-6 bg-zinc-800 w-3/4 mb-2" />
          <div className="h-4 bg-zinc-800 w-1/2" />
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-zinc-800" />
          <div className="w-8 h-8 bg-zinc-800" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-zinc-800 w-full" />
        <div className="h-3 bg-zinc-800 w-5/6" />
        <div className="h-3 bg-zinc-800 w-4/6" />
      </div>

      {/* Footer skeleton */}
      <div className="pt-4 border-t-2 border-zinc-800">
        <div className="flex gap-2">
          <div className="h-6 bg-zinc-800 w-20" />
          <div className="h-6 bg-zinc-800 w-24" />
        </div>
      </div>
    </div>
  )
}

// Progress bar loader
export function LoadingProgress({ progress }: { progress: number }) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-zinc-400 font-mono text-sm uppercase tracking-wider">
          Loading...
        </span>
        <span className="text-emerald-400 font-mono text-sm font-bold">
          {progress}%
        </span>
      </div>
      
      <div className="w-full h-3 bg-zinc-900 border-2 border-zinc-800 relative overflow-hidden">
        {/* Progress fill */}
        <div 
          className="h-full bg-linear-to-r from-emerald-400 to-cyan-400 transition-all duration-300 relative"
          style={{ width: `${progress}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>

        {/* Pulsing indicator */}
        {progress < 100 && (
          <div 
            className="absolute top-0 w-1 h-full bg-white animate-pulse"
            style={{ left: `${progress}%` }}
          />
        )}
      </div>
    </div>
  )
}

// Text loading with dots animation
export function LoadingText({ text = "Loading" }: { text?: string }) {
  return (
    <div className="flex items-center gap-2 text-zinc-400 font-mono uppercase tracking-wider text-sm">
      <span>{text}</span>
      <span className="flex gap-1">
        <span className="animate-bounce" style={{ animationDelay: '0s' }}>.</span>
        <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>.</span>
        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
      </span>
    </div>
  )
}

// Overlay loading (for modals, etc.)
export function LoadingOverlay({ message }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-zinc-950 border-4 border-emerald-400 p-12 shadow-[12px_12px_0px_0px_rgba(16,185,129,0.5)]">
        {/* Spinner */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-zinc-800 rounded-full" />
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-emerald-400 border-r-cyan-400 rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
            </div>
          </div>
        </div>

        {/* Message */}
        {message && (
          <p className="text-white font-mono uppercase tracking-widest text-center text-sm">
            {message}
          </p>
        )}

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  )
}