"use client"
import { useState } from "react";
import { CreateProject, Project,  } from "@/types/project";
import { FormField } from "../../shared/formField";
import { Save } from "lucide-react";
import { useCreateProject } from "@/app/hooks/projects/useCreateProject";
import handleApiError from "@/app/heplers/handleErrors";
import toast from "react-hot-toast";
import Link from "next/link";


export const AddProjectForm = () => {
    const mutation = useCreateProject()
    const [assignedMembersString, setAssignedMembersString] = useState('');
    const [projectData,setProjectData] = useState<CreateProject>({
        name: '',
        description: '',
        repoUrl:'',
        assignedTeam: '',
        assignedMembers: [],
    });
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldName = e.target.name as keyof CreateProject;
        const value = e.target.value;
        // simple input validation
        

        if (fieldName === 'assignedMembers') {
          setAssignedMembersString(value);
          return;
        }
        setProjectData({...projectData, [fieldName]: value});
    };

    const handleSubmit =async (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
        setProjectData({
            ...projectData,
            assignedMembers: assignedMembersString.split(',').map(email => email.trim()).filter(email => email)
        });

        if (!projectData.name.trim().length || projectData.name.trim().length < 3) {
            toast.error('Project name must be at least 3 characters long');
            return;
        }
        try {
            const response = await mutation.mutateAsync(projectData);
            if(!response.success){
                throw new Error(response.error || 'Failed to create project');
            }
            toast.success('Project created successfully!');
        } catch (error) {
           const errorMessqge = handleApiError(error)
           toast.error(errorMessqge);
        }
    };

    return (
        <div className=" bg-zinc-900 border-2 border-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">
                {projectData.name ? 'Edit Project' : 'Add Project'}
            </h2>
            <form onSubmit={handleSubmit} className="w-full flex flex-col justify-start items-start space-y-4">
                <FormField
                    label="Project Name*"
                    value={projectData.name}
                    onChange={onChange}
                    placeholder="Enter project name (required)"
                    name="name"
                    required
                />
                <FormField
                    label="Repository URL"
                    value={projectData.repoUrl || ''}
                    onChange={onChange}
                    placeholder="https://github.com/user/repo"
                    name="repoUrl"
                />
                <FormField 
                    label="Description"
                    value={projectData.description}
                    onChange={onChange}
                    placeholder="Enter project description"
                    textarea
                    name="description"
                />
                <FormField 
                    label="Assigned Team"
                    value={projectData.assignedTeam || ''}
                    onChange={onChange}
                    name="assignedTeam"
                    placeholder="Enter assigned team"
                />
                <FormField 
                    label="Assigned Members"
                    name="assignedMembers"
                    value={assignedMembersString}
                    onChange={onChange}
                    placeholder="Enter member emails separated by commas"
                />
           <div className="flex gap-4 justify-end pt-4">
  {/* Cancel Button */}
  <Link 
    href="/in/projects" 
    className="px-6 py-3 bg-zinc-800 text-white font-bold uppercase tracking-wider
               hover:bg-zinc-700 transition-all duration-200 
               border-2 border-zinc-700 hover:border-zinc-600
               flex items-center justify-center gap-2"
  >
    Cancel
  </Link>
  
  {/* Save Button */}
  <button    
    disabled={mutation.isPending}
    type="submit"
    className={`px-6 py-3 font-bold uppercase tracking-wider
                transition-all duration-200 flex items-center justify-center gap-2
                ${mutation.isPending
                  ? "bg-zinc-700 text-zinc-500 cursor-not-allowed border-2 border-zinc-600"
                  : "bg-emerald-400 text-black border-2 border-black hover:bg-emerald-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                }`}
  >
    {mutation.isPending ? (
      <>
        <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
        <span>Saving...</span>
      </>
    ) : (
      <>
        <Save className="w-5 h-5" />
        <span>Save Project</span>
      </>
    )}
  </button>
</div>
            </form>
        </div>
    );
}   