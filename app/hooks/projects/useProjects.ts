import { getProjectsAction } from "@/app/actions/projectActions/getProjectsAction";
import { useQuery } from "@tanstack/react-query";



const useProjects = (userId: string) => {
  // TODO: Implement project data fetching
 return useQuery({
    queryKey: ['projects',userId],
    queryFn: () => getProjectsAction(userId),
    staleTime: 5 * 60 * 1000, 
  });

};

export default useProjects;