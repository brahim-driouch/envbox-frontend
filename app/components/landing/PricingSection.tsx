import { Check, Zap, Rocket } from "lucide-react"

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-zinc-950 border-2 border-zinc-800 px-6 py-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Pricing
              </span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            </div>
          </div>

          <h2 className="mb-6 text-5xl lg:text-7xl font-black text-white uppercase tracking-tight">
            Simple,{" "}
            <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Transparent
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-zinc-400 text-lg font-mono">
            Start free. Pay only when your team grows.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:gap-12 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="group animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative h-full bg-zinc-950 border-4 border-zinc-800 p-8 lg:p-10 hover:border-emerald-400 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(16,185,129,0.3)]">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-emerald-400/20 blur-2xl" />
              
              {/* Icon badge */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-emerald-500/10 border-2 border-emerald-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Zap className="w-7 h-7 text-emerald-400" strokeWidth={2.5} />
              </div>

              {/* Plan name */}
              <h3 className="mb-2 text-3xl font-black text-white uppercase tracking-tight">Free</h3>
              <p className="mb-8 text-zinc-500 font-mono text-sm">For solo developers & small tests</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-7xl font-black bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  $0
                </span>
                <span className="text-zinc-500 font-mono text-lg"> / month</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                <PricingFeature text="1 project included" />
                <PricingFeature text="Up to 3 team members" />
                <PricingFeature text="Secure environment variables" />
                <PricingFeature text="CLI access" />
              </ul>

              {/* CTA */}
              <a
                href="#"
                className="block w-full bg-zinc-900 border-2 border-emerald-400 text-emerald-400 px-6 py-4 text-center font-black uppercase tracking-wider transition-all duration-300 hover:bg-emerald-400 hover:text-black shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)] hover:shadow-[2px_2px_0px_0px_rgba(16,185,129,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Get Started Free
              </a>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-700" />
            </div>
          </div>

          {/* Premium Tier */}
          <div className="group animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-full bg-zinc-950 border-4 border-purple-500 p-8 lg:p-10 hover:border-purple-400 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)]">
              {/* Popular badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple-500 to-pink-500 px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-sm font-black uppercase tracking-wider text-black flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Most Flexible
                </span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-400/20 blur-2xl" />
              
              {/* Icon badge */}
              <div className="mb-6 mt-4 inline-flex items-center justify-center w-14 h-14 bg-purple-500/10 border-2 border-purple-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Rocket className="w-7 h-7 text-purple-400" strokeWidth={2.5} />
              </div>

              {/* Plan name */}
              <h3 className="mb-2 text-3xl font-black text-white uppercase tracking-tight">
                Pay as you grow
              </h3>
              <p className="mb-8 text-zinc-500 font-mono text-sm">Perfect for growing teams</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-7xl font-black bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  $5
                </span>
                <span className="text-zinc-500 font-mono text-lg"> / project</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                <PricingFeature text="First project free" highlighted />
                <PricingFeature text="$5 per additional project" />
                <PricingFeature text="3 members included per project" />
                <PricingFeature text="$1 per extra member" />
                <PricingFeature text="All features included" highlighted />
              </ul>

              {/* CTA */}
              <a
                href="#"
                className="block w-full bg-linear-to-r from-purple-500 to-pink-500 text-black px-6 py-4 text-center font-black uppercase tracking-wider transition-all duration-300 hover:from-purple-400 hover:to-pink-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] active:shadow-none active:translate-x-[8px] active:translate-y-[8px]"
              >
                Start Building
              </a>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-purple-400 to-pink-400" />
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-600">
            <div className="flex items-center gap-3 font-mono text-sm uppercase tracking-wider">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>No hidden fees</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-zinc-800" />
            <div className="flex items-center gap-3 font-mono text-sm uppercase tracking-wider">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              <span>Cancel anytime</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-zinc-800" />
            <div className="flex items-center gap-3 font-mono text-sm uppercase tracking-wider">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
              <span>Fair usage-based pricing</span>
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-zinc-500 font-mono text-sm">
            Questions about pricing?{" "}
            <a href="#" className="text-emerald-400 hover:text-emerald-300 font-bold underline decoration-2 underline-offset-4 transition-colors">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

// Reusable feature component
function PricingFeature({ text, highlighted = false }: { text: string; highlighted?: boolean }) {
  return (
    <li className="flex items-start gap-3 group/item">
      <div className="mt-1 shrink-0 w-6 h-6 bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
        <Check className="w-4 h-4 text-emerald-400" strokeWidth={3} />
      </div>
      <span className={`font-mono text-sm ${highlighted ? 'text-white font-bold' : 'text-zinc-400'}`}>
        {text}
      </span>
    </li>
  )
}

export default PricingSection