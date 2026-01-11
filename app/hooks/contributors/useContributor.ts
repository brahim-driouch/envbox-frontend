import { getContriubutorByIdAction } from "@/app/actions/contributorsAction/getContriubutorByIdAction"
import { useQuery } from "@tanstack/react-query"




export const useContributor = (contributorId: string) => {
    return useQuery({
        queryKey: ['contributor',contributorId],
        queryFn: () => getContriubutorByIdAction(contributorId),
        staleTime: 5 * 60 * 1000, // 5 minutes,
    
    })
}