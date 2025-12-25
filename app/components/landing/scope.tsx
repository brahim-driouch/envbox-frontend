import { Check, X, Target, Shield } from "lucide-react"

const Scope = () => {
  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Container */}
          <div className="relative bg-zinc-950 border-4 border-zinc-800 p-8 md:p-16 animate-fade-in">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-emerald-400" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-red-400" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-emerald-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-red-400" />

            {/* Header */}
            <div className="text-center mb-16 animate-slide-up">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-3 bg-black border-2 border-zinc-800 px-6 py-3">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Our Focus
                  </span>
                  <Target className="w-4 h-4 text-red-400" />
                </div>
              </div>

              <h2 className="mb-6 text-4xl lg:text-6xl font-black text-white uppercase tracking-tight">
                Honest about
                <span className="block mt-2 bg-linear-to-r from-emerald-400 to-red-400 bg-clip-text text-transparent">
                  Our Scope
                </span>
              </h2>
              
              <p className="mx-auto max-w-2xl text-zinc-400 text-lg font-mono">
                We focus on one thing and do it really well
              </p>
            </div>

            {/* Two Column Grid */}
            <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
              {/* What We Do */}
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative bg-black border-4 border-emerald-500/30 p-8 hover:border-emerald-400 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_12px_40px_rgba(16,185,129,0.3)]">
                  {/* Corner glow */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-400/20 blur-2xl" />
                  
                  {/* Header */}
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center bg-emerald-500/10 border-2 border-emerald-500">
                      <Check className="h-6 w-6 text-emerald-400" strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                      What We Do
                    </h3>
                  </div>

                  {/* List */}
                  <ul className="space-y-4">
                    <ScopeItem 
                      icon={<Check className="h-5 w-5 text-emerald-400" strokeWidth={3} />}
                      text="Development environment management for small teams"
                      positive
                    />
                    <ScopeItem 
                      icon={<Check className="h-5 w-5 text-emerald-400" strokeWidth={3} />}
                      text="Simple CLI for local development"
                      positive
                    />
                    <ScopeItem 
                      icon={<Check className="h-5 w-5 text-emerald-400" strokeWidth={3} />}
                      text="Team collaboration with access control"
                      positive
                    />
                    <ScopeItem 
                      icon={<Check className="h-5 w-5 text-emerald-400" strokeWidth={3} />}
                      text="Dev and staging environment support"
                      positive
                    />
                  </ul>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-emerald-400 to-cyan-400" />
                </div>
              </div>

              {/* What We Don't Do */}
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="relative bg-black border-4 border-red-500/30 p-8 hover:border-red-400 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_12px_40px_rgba(239,68,68,0.3)]">
                  {/* Corner glow */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-400/20 blur-2xl" />
                  
                  {/* Header */}
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center bg-red-500/10 border-2 border-red-500">
                      <X className="h-6 w-6 text-red-400" strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                      What We Don't Do
                    </h3>
                  </div>

                  {/* List */}
                  <ul className="space-y-4">
                    <ScopeItem 
                      icon={<X className="h-5 w-5 text-red-400" strokeWidth={3} />}
                      text="Enterprise secrets management"
                      positive={false}
                    />
                    <ScopeItem 
                      icon={<X className="h-5 w-5 text-red-400" strokeWidth={3} />}
                      text="Kubernetes or infrastructure secrets"
                      positive={false}
                    />
                    <ScopeItem 
                      icon={<X className="h-5 w-5 text-red-400" strokeWidth={3} />}
                      text="Compliance certifications (SOC2, HIPAA)"
                      positive={false}
                    />
                    <ScopeItem 
                      icon={<X className="h-5 w-5 text-red-400" strokeWidth={3} />}
                      text="CI/CD pipeline secret management"
                      positive={false}
                    />
                  </ul>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-red-400 to-orange-400" />
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="inline-flex items-center gap-3 bg-zinc-900 border-2 border-zinc-800 px-6 py-4">
                <Shield className="w-5 h-5 text-cyan-400" />
                <p className="text-zinc-400 font-mono text-sm">
                  Need enterprise features?{" "}
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 font-bold underline decoration-2 underline-offset-4 transition-colors">
                    We can recommend alternatives
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Reusable Scope Item Component
function ScopeItem({ 
  icon, 
  text, 
  positive 
}: { 
  icon: React.ReactNode
  text: string
  positive: boolean
}) {
  return (
    <li className="group/item flex items-start gap-4">
      <div className={`mt-0.5 flex-shrink-0 flex h-8 w-8 items-center justify-center ${
        positive 
          ? 'bg-emerald-500/10 border-2 border-emerald-500' 
          : 'bg-red-500/10 border-2 border-red-500'
      } group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300`}>
        {icon}
      </div>
      <span className="text-zinc-300 leading-relaxed font-mono text-sm pt-1">
        {text}
      </span>
    </li>
  )
}

export default Scope