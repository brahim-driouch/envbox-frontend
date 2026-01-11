"use client";

import { useState } from "react";
import { FormField } from "../../shared/formField";
import Link from "next/link";
import { TeamFormData } from "@/types/team";
import toast from "react-hot-toast";
import { useCreateTeam } from "@/app/hooks/teams/useCreateTeam";
import handleApiError from "@/app/heplers/handleErrors";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/authProvider";

export const CreateTeamForm = () => {
  const [team, setTeam] = useState<TeamFormData>({ name: "" });
  const mtation = useCreateTeam()
  const router = useRouter()
  const queryClient = useQueryClient()
  const {user} = useAuth()
  const userId = user ? user.id : ""
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     if(team.name.length < 2){
        toast.error('Team name must be at least 2 characters long');
        return;
     };
     try {
        const response = await mtation.mutateAsync(team);
         if(!response?.success) {
            toast.error('Failed to create team');
            return;
         }
         toast.success('Team created successfully');
         setTeam({ name: "", description: "" });
         await queryClient.invalidateQueries({ queryKey: ['user-teams', userId] });
         router.push("/in/teams")

         // TODO INVALIDATE teams query
     } catch (error) {
        const errorMessage = handleApiError(error);
        console.error("Failed to create team:", error);
        toast.error(errorMessage || 'Failed to create team');
     }

  };

  return (
    <div className=" bg-zinc-900 border-2 border-zinc-800 p-6 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <FormField
            label="Team Name*"
            value={team.name}
            onChange={(e) => setTeam({ ...team, name: e.target.value })}
            placeholder="Enter team name (required)"
            name="name"
            required
          />
        </div>
        <div>
           <FormField 
                    label="description"
                    value={team.description || ''}
                    onChange={(e) => setTeam({ ...team, description: e.target.value })}
                    placeholder="Enter team description (optional)"
                    textarea
                    name="description"
                />
        </div>
          <div className="flex gap-4 justify-end pt-4">
        <Link
          href="/in/teams"
          className="px-6 py-3 bg-zinc-800 text-white font-bold uppercase tracking-wider
               hover:bg-zinc-700 transition-all duration-200 
               border-2 border-zinc-700 hover:border-zinc-600
               flex items-center justify-center gap-2"
        >
          Cancel
        </Link>

        <button
          type="submit"
          className="px-4 py-2 bg-emerald-400 text-black font-medium rounded-md hover:bg-emerald-300 transition-colors"
          disabled={mtation.isPending}
        >
          {mtation.isPending ? 'Creating...' : 'Create Team'}
        </button>
        </div>
      </form>
    </div>
  );
};
