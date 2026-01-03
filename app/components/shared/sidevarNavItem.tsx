import { ReactNode } from "react";

type NavItemProps = {
  icon: ReactNode;
  label: string;
  href: string;
  isCollapsed?: boolean;
};

export const NavItem = ({ icon, label, href, isCollapsed = false }: NavItemProps) => {
  return (
    <a
      href={href}
      className={`group flex items-center border-2 border-zinc-800 
                  hover:border-emerald-400 hover:bg-zinc-900 transition-all duration-300
                  text-zinc-400 hover:text-emerald-400 relative ${
                    isCollapsed ? 'justify-center px-2 py-3' : 'gap-3 px-4 py-3'
                  }`}
    >
      <span className="shrink-0">{icon}</span>
      
      {!isCollapsed && (
        <span className="text-sm font-bold uppercase tracking-wider">
          {label}
        </span>
      )}

      {/* Tooltip for collapsed state */}
      {isCollapsed && (
        <div className="absolute z-40 left-full ml-2 px-3 py-2 bg-zinc-900 border-2 border-emerald-400 
                        text-emerald-400 text-sm font-bold uppercase tracking-wider
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        pointer-events-none whitespace-nowrap"
             style={{ zIndex: 9999 }}>
          {label}
          <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 
                          border-t-8 border-t-transparent 
                          border-b-8 border-b-transparent 
                          border-r-8 border-r-emerald-400">
          </div>
        </div>
      )}
    </a>
  );
};