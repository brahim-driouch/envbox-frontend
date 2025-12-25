import { Key, Lock, Server, Terminal, Users, Zap } from "lucide-react"

const Features = () => {
  return (
    <section id="features" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-black border-2 border-zinc-800 px-6 py-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Features
              </span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            </div>
          </div>

          <h2 className="mb-6 text-4xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            Everything you need,
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              nothing you don't
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-zinc-400 text-lg font-mono">
            Simple enough for small teams, powerful enough to scale
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {/* Feature 1 - Secure by Default */}
          <FeatureCard
            icon={<Lock className="h-8 w-8" strokeWidth={2.5} />}
            title="Secure by Default"
            description="End-to-end encryption, audit logs, and role-based access control built in."
            color="emerald"
            delay="0.1s"
          />

          {/* Feature 2 - Developer-First CLI */}
          <FeatureCard
            icon={<Terminal className="h-8 w-8" strokeWidth={2.5} />}
            title="Developer-First CLI"
            description="Simple commands that work with any tech stack. No complex configuration."
            color="cyan"
            delay="0.2s"
          />

          {/* Feature 3 - Team Collaboration */}
          <FeatureCard
            icon={<Users className="h-8 w-8" strokeWidth={2.5} />}
            title="Team Collaboration"
            description="Invite members, assign projects, and control access levels with ease."
            color="purple"
            delay="0.3s"
          />

          {/* Feature 4 - Lightning Fast */}
          <FeatureCard
            icon={<Zap className="h-8 w-8" strokeWidth={2.5} />}
            title="Lightning Fast"
            description="Get started in minutes. No infrastructure to manage or complex setup."
            color="yellow"
            delay="0.4s"
          />

          {/* Feature 5 - Environment Profiles */}
          <FeatureCard
            icon={<Server className="h-8 w-8" strokeWidth={2.5} />}
            title="Environment Profiles"
            description="Separate configs for development, staging, and production environments."
            color="red"
            delay="0.5s"
          />

          {/* Feature 6 - Version History */}
          <FeatureCard
            icon={<Key className="h-8 w-8" strokeWidth={2.5} />}
            title="Version History"
            description="Track all changes, rollback when needed, and see who changed what."
            color="blue"
            delay="0.6s"
          />
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-zinc-600 font-mono text-sm uppercase tracking-wider">
            And much more coming soon...
          </p>
        </div>
      </div>
    </section>
  )
}

// Reusable Feature Card Component
function FeatureCard({ 
  icon, 
  title, 
  description, 
  color, 
  delay 
}: { 
  icon: React.ReactNode
  title: string
  description: string
  color: 'emerald' | 'cyan' | 'purple' | 'yellow' | 'red' | 'blue'
  delay: string
}) {
  const colorConfig = {
    emerald: {
      border: 'border-emerald-500/30 hover:border-emerald-400',
      iconBg: 'bg-emerald-500/10 border-emerald-500',
      iconText: 'text-emerald-400',
      glow: 'hover:shadow-[0_20px_60px_rgba(16,185,129,0.2)]',
      accentBg: 'bg-emerald-400/20',
      accentLine: 'from-emerald-400 to-cyan-400'
    },
    cyan: {
      border: 'border-cyan-500/30 hover:border-cyan-400',
      iconBg: 'bg-cyan-500/10 border-cyan-500',
      iconText: 'text-cyan-400',
      glow: 'hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)]',
      accentBg: 'bg-cyan-400/20',
      accentLine: 'from-cyan-400 to-blue-400'
    },
    purple: {
      border: 'border-purple-500/30 hover:border-purple-400',
      iconBg: 'bg-purple-500/10 border-purple-500',
      iconText: 'text-purple-400',
      glow: 'hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)]',
      accentBg: 'bg-purple-400/20',
      accentLine: 'from-purple-400 to-pink-400'
    },
    yellow: {
      border: 'border-yellow-500/30 hover:border-yellow-400',
      iconBg: 'bg-yellow-500/10 border-yellow-500',
      iconText: 'text-yellow-400',
      glow: 'hover:shadow-[0_20px_60px_rgba(234,179,8,0.2)]',
      accentBg: 'bg-yellow-400/20',
      accentLine: 'from-yellow-400 to-orange-400'
    },
    red: {
      border: 'border-red-500/30 hover:border-red-400',
      iconBg: 'bg-red-500/10 border-red-500',
      iconText: 'text-red-400',
      glow: 'hover:shadow-[0_20px_60px_rgba(239,68,68,0.2)]',
      accentBg: 'bg-red-400/20',
      accentLine: 'from-red-400 to-orange-400'
    },
    blue: {
      border: 'border-blue-500/30 hover:border-blue-400',
      iconBg: 'bg-blue-500/10 border-blue-500',
      iconText: 'text-blue-400',
      glow: 'hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]',
      accentBg: 'bg-blue-400/20',
      accentLine: 'from-blue-400 to-cyan-400'
    }
  }

  const config = colorConfig[color]

  return (
    <div 
      className="group animate-slide-up" 
      style={{ animationDelay: delay }}
    >
      <div className={`relative h-full bg-black border-4 ${config.border} p-8 transition-all duration-500 hover:translate-y-[-8px] ${config.glow}`}>
        {/* Corner accent */}
        <div className={`absolute top-0 right-0 w-20 h-20 ${config.accentBg} blur-2xl`} />
        
        {/* Icon */}
        <div className={`mb-6 flex h-16 w-16 items-center justify-center ${config.iconBg} border-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
          <div className={config.iconText}>
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-4 text-xl font-black text-white uppercase tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 leading-relaxed font-mono text-sm">
          {description}
        </p>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r ${config.accentLine} group-hover:w-full transition-all duration-700`} />
      </div>
    </div>
  )
}

export default Features