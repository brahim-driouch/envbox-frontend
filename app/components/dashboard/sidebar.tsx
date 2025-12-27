import { Box, Users } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type SidebarProps = {
  activeView: "projects" | "teams" | "members";
  setActiveView: Dispatch<SetStateAction<"projects" | "teams" | "members">>;
  projectsLength: number;
  teamsLength: number;
  membersLength: number;
};

function NavItem({ icon, label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
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
    </button>
  );
}

export const Sidebar = ({ activeView, setActiveView, projectsLength, teamsLength, membersLength }: SidebarProps) => {
  
  const StatBadge = ({ label, value, color }: any) => {
  const colors = {
    emerald: 'from-emerald-400 to-emerald-600',
    cyan: 'from-cyan-400 to-cyan-600',
    purple: 'from-purple-400 to-purple-600',
  };
    return (
    <div className="bg-zinc-900 border-2 border-zinc-800 p-4">
      <div className={`text-3xl font-black bg-linear-to-r ${colors[color as keyof typeof colors]} bg-clip-text text-transparent mb-1`}>
        {value}
      </div>
      <div className="text-xs text-zinc-500 uppercase tracking-widest">{label}</div>
    </div>
  );
  }
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
                active={activeView === 'projects'}
                onClick={() => setActiveView('projects')}
              />
              <NavItem
                icon={<Users className="w-5 h-5" />}
                label="Teams"
                active={activeView === 'teams'}
                onClick={() => setActiveView('teams')}
              />
              <NavItem
                icon={<Users className="w-5 h-5" />}
                label="Members"
                active={activeView === 'members'}
                onClick={() => setActiveView('members')}
              />
            </nav>

            {/* Stats */}
            <div className="mt-12 space-y-4 pt-8 border-t-2 border-zinc-800">
              <StatBadge label="Projects" value={projectsLength} color="emerald" />
              <StatBadge label="Teams" value={teamsLength} color="cyan" />
              <StatBadge label="Members" value={membersLength} color="purple" />
            </div>
          </div>
        </aside>
    )

  }