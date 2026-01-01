"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

export const NavItem = ({ icon, label, href }: NavItemProps) => {
    const pathname = usePathname();
    const active = pathname.includes(href);
  return (
    <Link href={href}
      className={`w-full flex items-center gap-3 px-4 py-3 uppercase text-sm font-bold tracking-wider
                 transition-all duration-200 border-l-4 group
                 ${active 
                   ? 'bg-zinc-900 border-emerald-400 text-emerald-400' 
                   : 'border-transparent hover:bg-zinc-900 hover:border-zinc-700 text-zinc-400 hover:text-white'
                 }`}
    >
      <span className={`transition-transform duration-200 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
        {icon}
      </span>
      {label}
    </Link>
  );
}