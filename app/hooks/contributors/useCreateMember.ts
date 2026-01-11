import { addContributorAction } from "@/app/actions/contributorsAction/addContributorAction"
import { ContributorCreate } from "@/types/contributor"
import { useMutation } from "@tanstack/react-query"



export const useCreateContributor = () => {
    return useMutation({
       mutationFn:(member:ContributorCreate)=>addContributorAction(member)
    })
}