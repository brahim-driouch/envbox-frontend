"use client"
import { Box, Settings, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { NavItem } from "../shared/sidevarNavItem";
import { useState } from "react";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={`lg:sticky  lg:top-0 bg-zinc-950 border-r-4 border-emerald-400 lg:overflow-y-auto transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
      style={{ zIndex: 100 }}
    >
      <div className={`relative overflow-x-hidden ${isCollapsed ? 'p-4' : 'p-8'} transition-all duration-300`}>
        {/* Collapse Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`absolute top-4 p-2 bg-zinc-900 border-2 border-emerald-400 
                     hover:bg-emerald-400 hover:text-zinc-950 transition-all duration-300
                     text-emerald-400 z-10 ${isCollapsed ? 'left-1/2 -translate-x-1/2' : 'right-4'}`}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>

        {/* Logo */}
        <div className={`mb-12 transition-all duration-300 ${isCollapsed ? 'mt-16' : 'mt-0'}`}>
          {!isCollapsed ? (
            <>
              <h1 className="text-3xl font-black tracking-tighter mb-2 bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent uppercase">
                envStash
              </h1>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">Admin Portal</p>
            </>
          ) : (
            <div className="flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center bg-linear-to-r from-emerald-400 to-cyan-400 text-zinc-950 text-2xl font-black">
                E
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="space-y-2 relative overflow-visible">
          <NavItem
            icon={<Box className="w-5 h-5" />}
            label="Projects"
            href="/in/projects"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<Users className="w-5 h-5" />}
            label="Teams"
            href="/in/teams"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<Users className="w-5 h-5" />}
            label="Members"
            href="/in/members"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<Settings className="w-5 h-5" />}
            label="Settings"
            href="/in/settings"
            isCollapsed={isCollapsed}
          />
        </nav>
      </div>
    </aside>
  );
};