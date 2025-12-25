import { Rocket, Calendar, Zap } from "lucide-react"

const CallToAction = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Multiple gradient orbs for energy */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Container */}
          <div className="relative animate-fade-in">
            {/* Outer glow border */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-purple-500 blur-xl opacity-50 animate-pulse-slow" />
            
            {/* Main container */}
            <div className="relative bg-zinc-950 border-4 border-transparent bg-clip-padding p-1">
              <div className="bg-gradient-to-br from-emerald-500 via-cyan-500 to-purple-500 p-[3px]">
                <div className="bg-black p-12 md:p-16 text-center">
                  {/* Decorative corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-emerald-400" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-cyan-400" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-purple-400" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-pink-400" />

                  {/* Icon badges */}
                  <div className="flex justify-center gap-4 mb-8 animate-slide-up">
                    <div className="w-12 h-12 bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center animate-float">
                      <Zap className="w-6 h-6 text-emerald-400" strokeWidth={2.5} />
                    </div>
                    <div className="w-12 h-12 bg-cyan-500/10 border-2 border-cyan-500 flex items-center justify-center animate-float" style={{ animationDelay: '0.3s' }}>
                      <Rocket className="w-6 h-6 text-cyan-400" strokeWidth={2.5} />
                    </div>
                    <div className="w-12 h-12 bg-purple-500/10 border-2 border-purple-500 flex items-center justify-center animate-float" style={{ animationDelay: '0.6s' }}>
                      <Calendar className="w-6 h-6 text-purple-400" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Headline */}
                  <h2 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <span className="block text-white mb-2">Ready to</span>
                    <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                      Get Started?
                    </span>
                  </h2>

                  {/* Subheadline */}
                  <p className="mx-auto mb-12 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed font-mono animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Join <span className="text-emerald-400 font-bold">hundreds of developers</span> who've stopped wasting time on environment variable chaos.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col justify-center gap-6 sm:flex-row mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    {/* Primary CTA */}
                    <a 
                      href="#" 
                      className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-10 py-5 text-lg font-black uppercase tracking-wider overflow-hidden transition-all duration-300 hover:from-emerald-300 hover:to-cyan-300 shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] hover:translate-x-[4px] hover:translate-y-[4px] active:shadow-none active:translate-x-[8px] active:translate-y-[8px]"
                    >
                      <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>Start Free Trial</span>
                    </a>

                    {/* Secondary CTA */}
                    <a 
                      href="#" 
                      className="group inline-flex items-center justify-center gap-3 bg-zinc-900 text-white border-4 border-zinc-700 px-10 py-5 text-lg font-black uppercase tracking-wider transition-all duration-300 hover:border-purple-400 hover:text-purple-400 shadow-[8px_8px_0px_0px_rgba(39,39,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(168,85,247,1)] hover:translate-x-[4px] hover:translate-y-[4px]"
                    >
                      <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Schedule a Demo</span>
                    </a>
                  </div>

                  {/* Trust badges */}
                  <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-zinc-600">
                      <div className="flex items-center gap-3 font-mono text-xs md:text-sm uppercase tracking-wider">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span>No credit card required</span>
                      </div>
                      <div className="hidden sm:block w-px h-4 bg-zinc-800" />
                      <div className="flex items-center gap-3 font-mono text-xs md:text-sm uppercase tracking-wider">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                        <span>14-day free trial</span>
                      </div>
                      <div className="hidden sm:block w-px h-4 bg-zinc-800" />
                      <div className="flex items-center gap-3 font-mono text-xs md:text-sm uppercase tracking-wider">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                        <span>Cancel anytime</span>
                      </div>
                    </div>
                  </div>

                  {/* Urgency message */}
                  <div className="mt-8 inline-flex items-center gap-3 bg-zinc-900 border-2 border-emerald-500/30 px-6 py-3 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                    <div className="relative">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping absolute" />
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    </div>
                    <span className="text-zinc-400 font-mono text-sm">
                      <span className="text-emerald-400 font-bold">23 developers</span> signed up this week
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction