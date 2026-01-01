import { EnvVar, Project } from "@/types/project";
import { IconButton } from "../../shared/iconButton";
import { Edit, Trash2 } from "lucide-react";
import { EnvVarItem } from "../envVarItem";

export const ProjectsView = () => {
    const projects : Project[] = []

  return (
    <div className="space-y-6 animate-fade-in">
   
      <div className="grid gap-6 lg:grid-cols-2">
        {projects?.map((project: Project, index: number) => (
          <div
            key={project.id}
            className="bg-zinc-950 border-4 border-zinc-800 p-6 hover:border-emerald-400 
                     transition-all duration-300 group animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{project.name}</h3>
                <p className="text-sm text-zinc-500">{project.description}</p>
              </div>
              <div className="flex gap-2">
                <IconButton
                  icon={<Edit className="w-4 h-4" />}
                  onClick={() =>console.log('project', project)}
                  
                />
                <IconButton
                  icon={<Trash2 className="w-4 h-4" />}
                  onClick={() => console.log('delete project', project.id)}
                />
              </div>
            </div>

            {/* Team Assignment */}
            {project.assignedTeam && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400 text-cyan-400 text-xs uppercase font-bold">
                  Team: {project.assignedTeam}
                </span>
              </div>
            )}

            {/* Environment Variables */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
                  Environment Variables ({project?.envVars?.length})
                </h4>
                <button
                  onClick={() => console.log('add env var')}
                  className="text-xs text-emerald-400 hover:text-emerald-300 uppercase font-bold"
                >
                  + Add
                </button>
              </div>
              <div className="space-y-1">
                {project.envVars?.slice(0, 3).map((env: EnvVar) => (
                  <EnvVarItem key={env.id} envVar={env} />
                ))}
                {project.envVars && project.envVars.length > 3 && (
                  <div className="text-xs text-zinc-600 uppercase">
                    +{project.envVars.length - 3} more...
                  </div>
                )}
              </div>
            </div>

            {/* Assigned Members */}
            {project.assignedMembers && project.assignedMembers.length > 0 && (
              <div className="pt-4 border-t-2 border-zinc-800">
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
                  Assigned Members
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.assignedMembers.map((member, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-900 text-xs border border-zinc-700">
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
