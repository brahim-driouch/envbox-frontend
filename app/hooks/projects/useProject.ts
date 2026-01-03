import { getProjectAction } from "@/app/actions/projectActions/getProjectAction"
import { useQuery } from "@tanstack/react-query"



export const useProject = (projectId:string)=>{

    return useQuery({
        queryKey:["project",projectId],
        queryFn:()=>getProjectAction(projectId),
        staleTime: 5 * 60 * 1000,
    });
}