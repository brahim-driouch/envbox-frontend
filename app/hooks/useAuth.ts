import { useQuery } from "@tanstack/react-query";
import { getSessionAction } from "../actions/userActions/getSessionAction";




export const useAuth = () => {
   return useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
        const result = await getSessionAction();
        return result;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
    
   })
};