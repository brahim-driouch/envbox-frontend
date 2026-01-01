import { addProjectAction } from "@/app/actions/projectActions/addProjectAction"
import { CreateProject } from "@/types/project"
import { useMutation } from "@tanstack/react-query"




export const useCreateProject =()=>{
    return useMutation({
        mutationFn:(projectFormData:CreateProject)=>addProjectAction(projectFormData),
        retry:2
    })
}