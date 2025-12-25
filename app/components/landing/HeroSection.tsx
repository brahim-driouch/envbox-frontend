import { Shield, ArrowRight, Sparkles } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-none bg-zinc-950 border-2 border-emerald-400 px-6 py-3 animate-fade-in shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <Shield className="h-5 w-5 text-emerald-400 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wider text-white font-mono">
              Secure Environment Management
            </span>
            <Sparkles className="h-4 w-4 text-emerald-400" />
          </div>

          {/* Main Headline */}
          <h1 className="mb-8 animate-slide-up">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-white mb-4">
              Environment variables,
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                finally done right
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-12 max-w-3xl text-lg md:text-xl text-zinc-400 leading-relaxed font-mono animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Stop sharing secrets in Slack. Skip the enterprise complexity. 
            <span className="text-emerald-400 font-bold"> envbox </span> 
            is the simple, secure way for small teams to manage development environment variables.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-6 sm:flex-row animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {/* Primary CTA */}
            <a 
              href="#" 
              className="group relative inline-flex items-center justify-center gap-3 bg-emerald-400 text-black px-10 py-5 text-lg font-black uppercase tracking-wider overflow-hidden transition-all duration-300 hover:bg-emerald-300 shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] hover:translate-x-[4px] hover:translate-y-[4px] active:shadow-none active:translate-x-[8px] active:translate-y-[8px]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Secondary CTA */}
            <a 
              href="#how-it-works" 
              className="group inline-flex items-center justify-center gap-3 bg-zinc-950 text-white border-4 border-zinc-700 px-10 py-5 text-lg font-black uppercase tracking-wider transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 shadow-[8px_8px_0px_0px_rgba(39,39,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(34,211,238,1)] hover:translate-x-[4px] hover:translate-y-[4px]"
            >
              See How It Works
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-zinc-600 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-mono uppercase tracking-wider">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm font-mono uppercase tracking-wider">5-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm font-mono uppercase tracking-wider">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-emerald-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection