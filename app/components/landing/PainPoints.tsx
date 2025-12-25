import { Shield, Users, X } from "lucide-react"

const PainPoints = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Gradient orbs for atmosphere */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="mb-6 text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
            The old way is{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              broken
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400 text-lg font-mono">
            Managing environment variables shouldn't be this painful
          </p>
        </div>
        
        {/* Pain Point Cards */}
        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {/* Card 1 - Slack & Email Chaos */}
          <div className="group animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative h-full bg-zinc-950 border-4 border-red-500/30 p-8 
                          hover:border-red-500 transition-all duration-500
                          hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(239,68,68,0.3)]">
              {/* Glowing corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/20 blur-2xl" />
              
              <div className="mb-6 flex h-16 w-16 items-center justify-center 
                            bg-red-500/10 border-2 border-red-500 
                            group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <X className="h-8 w-8 text-red-500" strokeWidth={3} />
              </div>
              
              <h3 className="mb-4 text-2xl font-black text-white uppercase tracking-tight">
                Slack & Email Chaos
              </h3>
              
              <p className="text-zinc-400 leading-relaxed font-mono text-sm">
                Variables get lost in chat history, sent to wrong channels, or buried in email threads.
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 
                            group-hover:w-full transition-all duration-700" />
            </div>
          </div>

          {/* Card 2 - Over-Engineered Tools */}
          <div className="group animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-full bg-zinc-950 border-4 border-yellow-500/30 p-8 
                          hover:border-yellow-500 transition-all duration-500
                          hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(234,179,8,0.3)]">
              {/* Glowing corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/20 blur-2xl" />
              
              <div className="mb-6 flex h-16 w-16 items-center justify-center 
                            bg-yellow-500/10 border-2 border-yellow-500 
                            group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Shield className="h-8 w-8 text-yellow-500" strokeWidth={3} />
              </div>
              
              <h3 className="mb-4 text-2xl font-black text-white uppercase tracking-tight">
                Over-Engineered Tools
              </h3>
              
              <p className="text-zinc-400 leading-relaxed font-mono text-sm">
                Enterprise solutions are too complex, too expensive, and built for teams 10x your size.
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 
                            group-hover:w-full transition-all duration-700" />
            </div>
          </div>

          {/* Card 3 - Onboarding Hell */}
          <div className="group animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative h-full bg-zinc-950 border-4 border-purple-500/30 p-8 
                          hover:border-purple-500 transition-all duration-500
                          hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(168,85,247,0.3)]">
              {/* Glowing corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 blur-2xl" />
              
              <div className="mb-6 flex h-16 w-16 items-center justify-center 
                            bg-purple-500/10 border-2 border-purple-500 
                            group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Users className="h-8 w-8 text-purple-500" strokeWidth={3} />
              </div>
              
              <h3 className="mb-4 text-2xl font-black text-white uppercase tracking-tight">
                Onboarding Hell
              </h3>
              
              <p className="text-zinc-400 leading-relaxed font-mono text-sm">
                New developers waste hours setting up environments with missing or outdated secrets.
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 
                            group-hover:w-full transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PainPoints