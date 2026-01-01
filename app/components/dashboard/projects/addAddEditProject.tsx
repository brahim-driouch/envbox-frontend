"use client"
import { useState } from "react";
import { Project,  } from "@/types/project";
import { FormField } from "../../shared/formField";
import { IconButton } from "../../shared/iconButton";
import { SaveIcon } from "lucide-react";

type AddEditProjectProps = {
  initialProjectData: Project | null;
};

export const AddEditProject = ({ initialProjectData }: AddEditProjectProps) => {
    const [project, setProject] = useState<Project>({ 
        name: initialProjectData?.name || '',
        description: initialProjectData?.description || '',
        assignedTeam: initialProjectData?.assignedTeam || '',
        assignedMembers: initialProjectData?.assignedMembers || []
    });
    const onChange = (field: keyof Project, value: string | string[]) => {
        // simple input validation
        if (initialProjectData && project[field] === value) return;
        if (typeof value === 'string' && value.trim() === '') return;
        if (field === 'name' && typeof value === 'string' && value.length < 2) return;

        if (field === 'assignedMembers' && Array.isArray(value)) {
            // Handle array values specifically if needed
        }
        setProject({...project, [field]: value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Submitting project:', project);
    };

    return (
        <div className="bg-zinc-900 border-2 border-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">
                {project.name ? 'Edit Project' : 'Add Project'}
            </h2>
            <form onSubmit={handleSubmit}>
                <FormField
                    label="Project Name"
                    value={project.name}
                    onChange= {(value) => onChange('name', value)}
                    placeholder="Enter project name"
                />
                <FormField 
                    label="Description"
                    value={project.description}
                    onChange={(value) => onChange('description', value)}
                    placeholder="Enter project description"
                    textarea
                />
                <FormField 
                    label="Assigned Team"
                    value={project.assignedTeam || ''}
                    onChange={(value) => onChange('assignedTeam', value)}
                    placeholder="Enter assigned team"
                />
                <FormField 
                    label="Assigned Members"
                    value={(project.assignedMembers || []).join(', ')}
                    onChange={(value) => onChange('assignedMembers', value.split(',').map(m => m.trim()).filter(m => m.length > 0))}
                    placeholder="Enter member emails separated by commas"
                />
                <IconButton 
                icon={<SaveIcon/>}
                onClick={() => console.log('Save project', project)}
                 size="md"
                text="Save Project"
                variant="primary"
                fullWidth
                className="mt-2"
            
                />
            </form>
        </div>
    );
}   