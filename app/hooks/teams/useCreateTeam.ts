import { addTeamAction } from "@/app/actions/teams/addTeamAction"
import { TeamFormData } from "@/types/team"
import { useMutation } from "@tanstack/react-query"



export const useCreateTeam =()=>{
    return useMutation({
        mutationFn:(team:TeamFormData)=>addTeamAction(team)
    })
}