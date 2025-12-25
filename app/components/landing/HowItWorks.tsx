import { Code, Mail, Terminal } from "lucide-react"

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      
      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-zinc-950 border-2 border-zinc-800 px-6 py-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Simple Process
              </span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            </div>
          </div>
          
          <h2 className="mb-6 text-5xl lg:text-7xl font-black text-white uppercase tracking-tight">
            Three Simple
            <span className="block mt-2 bg-linear-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Steps
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-zinc-400 text-lg font-mono">
            Get your team up and running in minutes
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-12 lg:gap-16 md:grid-cols-3 max-w-7xl mx-auto">
          {/* Step 1 */}
          <div className="group text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* Number Badge */}
            <div className="relative mb-8 mx-auto w-fit">
              <div className="relative flex h-24 w-24 items-center justify-center bg-linear-to-br from-emerald-400 to-cyan-400 text-4xl font-black text-black shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all duration-300">
                1
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-ping" />
              </div>
            </div>

            {/* Icon */}
            <div className="mb-8 mx-auto flex h-20 w-20 items-center justify-center bg-emerald-500/10 border-2 border-emerald-500 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Code className="h-10 w-10 text-emerald-400" strokeWidth={2.5} />
            </div>

            {/* Content */}
            <h3 className="mb-4 text-2xl font-black text-white uppercase tracking-tight">
              Create & Organize
            </h3>
            <p className="text-zinc-400 leading-relaxed font-mono text-sm max-w-xs mx-auto">
              Set up projects and add your environment variables. Organize by{" "}
              <span className="text-emerald-400 font-bold">dev</span>,{" "}
              <span className="text-cyan-400 font-bold">staging</span>, and{" "}
              <span className="text-purple-400 font-bold">production</span>.
            </p>

            {/* Bottom accent */}
            <div className="mt-8 mx-auto w-16 h-1 bg-linear-to-r from-transparent via-emerald-400 to-transparent" />
          </div>

          {/* Step 2 */}
          <div className="group text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Number Badge */}
            <div className="relative mb-8 mx-auto w-fit">
              <div className="relative flex h-24 w-24 items-center justify-center bg-linear-to-br from-cyan-400 to-blue-400 text-4xl font-black text-black shadow-[8px_8px_0px_0px_rgba(34,211,238,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(34,211,238,1)] group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all duration-300">
                2
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>

            {/* Icon */}
            <div className="mb-8 mx-auto flex h-20 w-20 items-center justify-center bg-cyan-500/10 border-2 border-cyan-500 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Mail className="h-10 w-10 text-cyan-400" strokeWidth={2.5} />
            </div>

            {/* Content */}
            <h3 className="mb-4 text-2xl font-black text-white uppercase tracking-tight">
              Invite Your Team
            </h3>
            <p className="text-zinc-400 leading-relaxed font-mono text-sm max-w-xs mx-auto">
              Add team members to projects. They get{" "}
              <span className="text-cyan-400 font-bold">secure access</span>{" "}
              without any manual setup.
            </p>

            {/* Bottom accent */}
            <div className="mt-8 mx-auto w-16 h-1 bg-linear-to-r from-transparent via-cyan-400 to-transparent" />
          </div>

          {/* Step 3 */}
          <div className="group text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {/* Number Badge */}
            <div className="relative mb-8 mx-auto w-fit">
              <div className="relative flex h-24 w-24 items-center justify-center bg-linear-to-br from-purple-400 to-pink-400 text-4xl font-black text-black shadow-[8px_8px_0px_0px_rgba(168,85,247,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(168,85,247,1)] group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all duration-300">
                3
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }} />
              </div>
            </div>

            {/* Icon */}
            <div className="mb-8 mx-auto flex h-20 w-20 items-center justify-center bg-purple-500/10 border-2 border-purple-500 group-hover:bg-purple-500/20 group-hover:border-purple-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Terminal className="h-10 w-10 text-purple-400" strokeWidth={2.5} />
            </div>

            {/* Content */}
            <h3 className="mb-4 text-2xl font-black text-white uppercase tracking-tight">
              Use the CLI
            </h3>
            <p className="text-zinc-400 leading-relaxed font-mono text-sm max-w-xs mx-auto mb-4">
              Run the command to securely load variables into your environment.
            </p>
            
            {/* Code block */}
            <div className="mx-auto max-w-fit">
              <code className="inline-block bg-zinc-900 border-2 border-purple-500 px-4 py-3 text-sm font-mono text-purple-400 font-bold shadow-[4px_4px_0px_0px_rgba(168,85,247,0.3)]">
                $ envbox inject
              </code>
            </div>

            {/* Bottom accent */}
            <div className="mt-8 mx-auto w-16 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent" />
          </div>
        </div>

        {/* Connection Lines (optional decorative element) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl pointer-events-none">
          <svg className="w-full h-24 opacity-20" viewBox="0 0 800 100">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M 50 50 Q 250 20, 400 50 T 750 50"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              className="animate-dash"
            />
          </svg>
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-zinc-600 font-mono text-sm uppercase tracking-wider">
            Ready in less than <span className="text-emerald-400 font-bold">5 minutes</span>
          </p>
        </div>
      </div>

   
    </section>
  )
}

export default HowItWorks