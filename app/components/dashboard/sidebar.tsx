import { Box, Settings, Settings2, Users } from "lucide-react";
import { NavItem } from "../shared/sidevarNavItem";




export const Sidebar = () => {
  
  const projectsLength = 0
  const teamsLength = 0
  const membersLength = 0
  
    return (
       <aside className="lg:sticky lg:top-0  bg-zinc-950 border-r-4 border-emerald-400 lg:overflow-y-auto">
          <div className="p-8">
            {/* Logo */}
            <h1 className="text-5xl font-black tracking-tighter mb-2 bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent uppercase">
              envStash
            </h1>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-12">Admin Portal</p>

            {/* Navigation */}
            <nav className="space-y-2">
              <NavItem
                icon={<Box className="w-5 h-5" />}
                label="Projects"
                href="/in/projects"
               
              />
              <NavItem
                icon={<Users className="w-5 h-5" />}
                label="Teams"
                href="/in/teams"
              />
              <NavItem
                icon={<Users className="w-5 h-5" />}
                label="Members"
                href="/in/members"
                
               />
              <NavItem
                icon={<Settings className="w-5 h-5" />}
                label="Settings"
                href="/in/settings"
                
               />

            </nav>

            {/* Stats */}
           
          </div>
        </aside>
    )

  }