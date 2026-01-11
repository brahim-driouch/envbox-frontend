import { useQuery } from "@tanstack/react-query";
import { getUserTeamsAction } from "@/app/actions/teams/getUserTeamsAction";

export const useUserTeams = (userId: string) => {
   return useQuery({
    queryKey: ['teams', userId],
    queryFn: () => getUserTeamsAction(userId)
   })
}