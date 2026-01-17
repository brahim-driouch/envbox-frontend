import { Team } from "@/types/team";
import { IconButton } from "../../shared/iconButton";
import { Edit, Trash2, Users } from "lucide-react";
import { useUserTeams } from "@/app/hooks/teams/useUserTeams";
import { useAuth } from "@/authProvider";
import toast from "react-hot-toast";
import { useDeleteTeam } from "@/app/hooks/teams/useDeleteTeam";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Link from "next/link";

export const TeamsView = () => {
  const mutation = useDeleteTeam();
  const queryClient =useQueryClient()
  const [deletingId,setDeletingId]=useState("")
  const auth = useAuth();
  const userId = auth.user?.id;
  const { data: teams, isLoading } = useUserTeams(userId ?? ''); 
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-zinc-700 border-t-cyan-400 rounded-full animate-spin" />
      </div>
    );
  }

  const teamsList = teams?.data || [];

  // handlers
  const handleTeamDelete = async(teamId:string) => {

    if(!teamId){
      toast.error("Team ID is required");
      return;
    }
    setDeletingId(teamId)
    try {
      const response = await mutation.mutateAsync(teamId);
      if(!response.success) {
        toast.error(response.error || "Failed to delete team");
        return;
      }
      await queryClient.invalidateQueries({ queryKey: ["teams", userId] });
      setDeletingId("")
      toast.success("Team deleted successfully");
    } catch (error) {
      toast.error("Failed to delete team");
      setDeletingId("")

    }

    
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Desktop Table View (hidden on mobile) */}
      <div className="hidden md:block overflow-x-auto border-4 border-zinc-800 bg-zinc-950">
        <table className="w-full">
          <thead>
            <tr className="border-b-4 border-zinc-800">
              <th className="px-6 py-4 text-left text-sm font-black uppercase tracking-wider text-zinc-400">
                Team Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-black uppercase tracking-wider text-zinc-400">
                Description
              </th>
              <th className="px-6 py-4 text-center text-sm font-black uppercase tracking-wider text-zinc-400">
                Members
              </th>
              <th className="px-6 py-4 text-right text-sm font-black uppercase tracking-wider text-zinc-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {teamsList.map((team: Team, index: number) => (
              <tr
                key={team.id}
                className="border-b-4 border-zinc-800 hover:bg-zinc-900 transition-colors duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-lg font-bold text-white">
                    {team.name}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-zinc-400 line-clamp-2">
                    {team.description || 'No description'}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="inline-flex items-center gap-2 bg-cyan-900/30 border border-cyan-700 px-3 py-1 rounded-lg">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 font-semibold">
                      {team?.contributors?.length ?? 0}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/in/teams/${team.id}`}>
                    <IconButton
                      icon={<Edit className="w-4 h-4" />}
                     />
                    </Link>
                    
                    <IconButton
                      onClick={() => handleTeamDelete(team.id)}
                  icon={deletingId === team.id ? (
                    <div className="w-4 h-4 border-2 border-zinc-700 border-t-cyan-400 rounded-full animate-spin" />
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                  disabled={deletingId === team.id}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {teamsList.length === 0 && (
          <div className="text-center py-12 text-zinc-500">
            No teams found. Create your first team!
          </div>
        )}
      </div>

      {/* Mobile Card View (hidden on desktop) */}
      <div className="md:hidden grid gap-4">
        {teamsList.map((team: Team, index: number) => (
          <div
            key={team.id}
            className="bg-zinc-950 border-4 border-zinc-800 p-4 hover:border-cyan-400 
                     transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-black uppercase tracking-tight text-white mb-1">
                  {team.name}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-2 mb-2">
                  {team.description || 'No description'}
                </p>
                <div className="inline-flex items-center gap-2 bg-cyan-900/30 border border-cyan-700 px-3 py-1 rounded-lg">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold text-sm">
                    {team?.contributors?.length ?? 0} members
                  </span>
                </div>
              </div>
              <div className="flex gap-2 ml-2">
                <IconButton
                  icon={<Edit className="w-4 h-4" />}
                  onClick={() => {}}
                />
                <IconButton
                  onClick={() => handleTeamDelete(team.id)}
                  icon={deletingId === team.id ? (
                    <div className="w-4 h-4 border-2 border-zinc-700 border-t-cyan-400 rounded-full animate-spin" />
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                  disabled={deletingId === team.id}
                />
              </div>
            </div>
          </div>
        ))}

        {teamsList.length === 0 && (
          <div className="text-center py-12 text-zinc-500 border-4 border-zinc-800 bg-zinc-950 rounded-lg">
            No teams found. Create your first team!
          </div>
        )}
      </div>
    </div>
  );
}