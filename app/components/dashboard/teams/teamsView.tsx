import { Team } from "@/types/team";
import { IconButton } from "../../shared/iconButton";
import { Edit, Trash2 } from "lucide-react";

export const TeamsView = () => {
  const teams : Team[] = [];
  return (
    <div className="space-y-6 animate-fade-in">
    

      <div className="grid gap-6 lg:grid-cols-2">
        {teams?.map((team: Team, index: number) => (
          <div
            key={team.id}
            className="bg-zinc-950 border-4 border-zinc-800 p-6 hover:border-cyan-400 
                     transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{team.name}</h3>
                <p className="text-sm text-zinc-500">{team.members.length} members</p>
              </div>
              <div className="flex gap-2">
                <IconButton
                  icon={<Edit className="w-4 h-4" />}
                  onClick={() => {}}
                  color="cyan"
                />
                <IconButton
                  icon={<Trash2 className="w-4 h-4" />}
                  onClick={() => console.log('delete team', team.id)}
                  color="red"
                />
              </div>
            </div>

            <div className="space-y-2">
              {team.members.map((member, i) => (
                <div key={i} className="px-3 py-2 bg-zinc-900 border border-zinc-800 text-sm">
                  {member.name} - {member.email}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}