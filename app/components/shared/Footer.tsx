import { Key, Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t-4 border-zinc-800 bg-black py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Subtle gradient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-12">
          {/* Brand Section */}
          <div className="max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-emerald-400 to-cyan-400 border-2 border-emerald-400 shadow-[4px_4px_0px_0px_rgba(16,185,129,1)]">
                <Key className="h-6 w-6 text-black" strokeWidth={2.5} />
              </div>
              <span className="text-3xl font-black text-white uppercase tracking-tight">envbox</span>
            </div>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed font-mono text-sm mb-6">
              Making development environment variable management{" "}
              <span className="text-emerald-400 font-bold">simple</span> and{" "}
              <span className="text-cyan-400 font-bold">secure</span> for small teams.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <SocialLink icon={<Github className="w-5 h-5" />} href="#" label="GitHub" />
              <SocialLink icon={<Twitter className="w-5 h-5" />} href="#" label="Twitter" />
              <SocialLink icon={<Linkedin className="w-5 h-5" />} href="#" label="LinkedIn" />
              <SocialLink icon={<Mail className="w-5 h-5" />} href="#" label="Email" />
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Product Links */}
            <div>
              <h3 className="text-white font-black uppercase text-sm tracking-wider mb-4 border-b-2 border-emerald-400 pb-2 inline-block">
                Product
              </h3>
              <ul className="space-y-3">
                <FooterLink href="#features" text="Features" />
                <FooterLink href="#pricing" text="Pricing" />
                <FooterLink href="#how-it-works" text="How it Works" />
                <FooterLink href="#" text="Changelog" />
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-black uppercase text-sm tracking-wider mb-4 border-b-2 border-cyan-400 pb-2 inline-block">
                Company
              </h3>
              <ul className="space-y-3">
                <FooterLink href="#" text="About Us" />
                <FooterLink href="#" text="Blog" />
                <FooterLink href="#" text="Careers" />
                <FooterLink href="#" text="Contact" />
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-white font-black uppercase text-sm tracking-wider mb-4 border-b-2 border-purple-400 pb-2 inline-block">
                Legal
              </h3>
              <ul className="space-y-3">
                <FooterLink href="#" text="Privacy Policy" />
                <FooterLink href="#" text="Terms of Service" />
                <FooterLink href="#" text="Cookie Policy" />
                <FooterLink href="#" text="Documentation" />
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-zinc-950 border-4 border-zinc-800 p-8 mb-12 hover:border-emerald-400 transition-all duration-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                Stay Updated
              </h3>
              <p className="text-zinc-400 font-mono text-sm">
                Get the latest updates and tips delivered to your inbox
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 bg-black border-2 border-zinc-700 px-4 py-3 text-white font-mono text-sm focus:border-emerald-400 outline-none transition-colors"
              />
              <button className="bg-emerald-400 text-black px-6 py-3 font-black uppercase text-sm hover:bg-emerald-300 transition-colors shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] hover:shadow-[2px_2px_0px_0px_rgba(16,185,129,1)] hover:translate-x-[2px] hover:translate-y-[2px] flex items-center gap-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 font-mono text-sm">
              © {new Date().getFullYear()} <span className="text-emerald-400 font-bold">envbox</span>. Built for developers, by developers.
            </p>
            
            {/* Status Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-zinc-900 border-2 border-zinc-800 px-4 py-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping absolute" />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                </div>
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  All systems operational
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Made with love note */}
        <div className="text-center mt-8">
          <p className="text-zinc-700 font-mono text-xs">
            Made with <span className="text-red-500">♥</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

// Social Link Component
function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center bg-zinc-900 border-2 border-zinc-800 text-zinc-400 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 hover:rotate-6"
    >
      {icon}
    </a>
  )
}

// Footer Link Component
function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <a
        href={href}
        className="group text-zinc-400 font-mono text-sm hover:text-white transition-colors inline-flex items-center gap-2"
      >
        <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all duration-300" />
        {text}
      </a>
    </li>
  )
}

export default Footer