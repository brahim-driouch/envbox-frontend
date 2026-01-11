





import { getContributorsAction } from "@/app/actions/contributorsAction/getContributorsAction"
import { useQuery } from "@tanstack/react-query"
import { Contributor } from "@/types/contributor"
import { ApiResponse } from "@/types/api"

export const useContributors = (userId:string) => {
      
    return useQuery<ApiResponse<Contributor[]>>({
        queryKey:["contributors", userId],
        queryFn:() => getContributorsAction(userId)
    })
}