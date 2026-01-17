import { getTeamByIdAction } from "@/app/actions/teams/getTeamByIdAction"
import { useQuery } from "@tanstack/react-query"



export const useTeam = (teamId:string)=>{
    return useQuery({
        queryKey:["team",teamId],
        queryFn:()=>getTeamByIdAction(teamId),
        staleTime: 1000 * 60 * 5, 
        retry:2
    })
}