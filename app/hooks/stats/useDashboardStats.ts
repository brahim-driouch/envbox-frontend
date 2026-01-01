import { useQuery } from '@tanstack/react-query';
import { getDashboardStats } from "@/app/actions/stats/getDashboardStats";

export function useDashboardStats(id: string) {
    return useQuery({
        queryKey: ['dashboard-stats', id],
        queryFn: () => getDashboardStats(id), 
        staleTime: 5 * 60 * 1000, 
        enabled: !!id, 
    });
}