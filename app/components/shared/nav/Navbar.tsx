import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden md:block flex-1 ml-10">
      <ul className="flex justify-center items-center gap-2">
        <NavLink href="/" text="Home" />
        <NavLink href="/#features" text="Features" />
        <NavLink href="/#pricing" text="Pricing" />
        <NavLink href="/docs" text="Docs" />
        <NavLink href="/contact" text="Contact" />
      </ul>
    </nav>
  );
};

// Reusable NavLink Component
function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link 
        className="group relative px-4 py-2 text-zinc-400 font-mono text-sm font-bold uppercase tracking-wider hover:text-white transition-colors duration-300"
        href={href}
      >
        {/* Animated underline */}
        <span className="relative">
          {text}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
        </span>
        
        {/* Hover background effect */}
        <span className="absolute inset-0 bg-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 border-2 border-transparent group-hover:border-emerald-400/30" />
      </Link>
    </li>
  );
}

export default Navbar;