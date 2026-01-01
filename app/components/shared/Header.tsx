import { Key } from "lucide-react"
import Link from "next/link"
import AuthNavBar from "./nav/AuthNavBar"
import Navbar from "./nav/Navbar"

const Header = () => {
  return (
    <header className="sticky top-0 w-full  border-b-4 border-zinc-800 z-50 backdrop-blur-sm bg-black/95">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-400 to-cyan-400 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              
              {/* Logo box */}
              <div className="relative flex h-12 w-12 items-center justify-center bg-linear-to-br from-emerald-400 to-cyan-400 border-2 border-emerald-400 shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] group-hover:shadow-[2px_2px_0px_0px_rgba(16,185,129,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-300">
                <Key className="h-6 w-6 text-black" strokeWidth={2.5} />
              </div>
            </div>

            {/* Brand name */}
            <span className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
              envbox
            </span>
          </Link>

          {/* Navigation */}
          <Navbar />

          {/* Auth Buttons */}
          <AuthNavBar />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-emerald-400 to-transparent opacity-30" />
    </header>
  )
}

export default Header