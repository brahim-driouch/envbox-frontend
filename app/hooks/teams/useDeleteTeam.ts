import { deleteTeamAction } from "@/app/actions/teams/deleteTeamAction"
import { useMutation } from "@tanstack/react-query"



export const useDeleteTeam = () => {
    return useMutation({
        mutationFn:(teamId: string)=>deleteTeamAction(teamId)
    })
}