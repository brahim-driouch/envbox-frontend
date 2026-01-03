import { EnvVar, Project } from "@/types/project";
import { IconButton } from "../../shared/iconButton";
import { Edit, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { EnvVarItem } from "../envVarItem";
import { useState } from "react";
import Link from "next/link";

type ProjectsViewProps = {
  projects: Project[];
};

export const ProjectsView = ({ projects }: ProjectsViewProps) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (projectId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedRows(newExpanded);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-4 border-zinc-800">
          <thead className="bg-zinc-950">
            <tr className="border-b-4 border-zinc-800">
              <th className="px-6 py-4 text-left text-xs uppercase tracking-widest text-emerald-400 font-black">
                Project
              </th>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-widest text-emerald-400 font-black">
                Team
              </th>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-widest text-emerald-400 font-black">
                Environment Variables
              </th>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-widest text-emerald-400 font-black">
                Members
              </th>
              <th className="px-6 py-4 text-right text-xs uppercase tracking-widest text-emerald-400 font-black">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-zinc-950">
            {projects?.map((project: Project, index: number) => (
              <tr
                key={project.id}
                className="border-b-2 border-zinc-800 hover:bg-zinc-900 transition-colors duration-200 animate-slide-up group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="px-6 py-4">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-zinc-500">{project.description}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {project.assignedTeam ? (
                    <span className="inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400 text-cyan-400 text-xs uppercase font-bold">
                      {project.assignedTeam}
                    </span>
                  ) : (
                    <span className="text-xs text-zinc-600 uppercase">—</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-zinc-500 font-bold">
                        {project?.envVars?.length || 0} vars
                      </span>
                     
                    </div>
                    {project.envVars?.slice(0, 2).map((env: EnvVar) => (
                      <EnvVarItem key={env.id} envVar={env} />
                    ))}
                    {project.envVars && project.envVars.length > 2 && (
                      <button
                        onClick={() => toggleRow(project.id)}
                        className="text-xs text-emerald-400 hover:text-emerald-300 uppercase font-bold flex items-center gap-1"
                      >
                        {expandedRows.has(project.id) ? (
                          <>
                            Show less <ChevronUp className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            +{project.envVars.length - 2} more <ChevronDown className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    )}
                    {expandedRows.has(project.id) && project.envVars && (
                      <div className="space-y-1 mt-2">
                        {project.envVars.slice(2).map((env: EnvVar) => (
                          <EnvVarItem key={env.id} envVar={env} />
                        ))}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  {project.assignedMembers && project.assignedMembers.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {project.assignedMembers.slice(0, 3).map((member, i) => (
                        <span key={i} className="px-2 py-1 bg-zinc-900 text-xs border border-zinc-700">
                          {member}
                        </span>
                      ))}
                      {project.assignedMembers.length > 3 && (
                        <span className="px-2 py-1 text-xs text-zinc-600">
                          +{project.assignedMembers.length - 3}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs text-zinc-600 uppercase">—</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/in/projects/${project.id}`}>
                      <IconButton
                      icon={<Edit className="w-4 h-4" />}
                      onClick={() => console.log('project', project)}
                    />
                    </Link>
                    <IconButton
                      icon={<Trash2 className="w-4 h-4" />}
                      onClick={() => console.log('delete project', project.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {projects?.map((project: Project, index: number) => (
          <div
            key={project.id}
            className="bg-zinc-950 border-4 border-zinc-800 hover:border-emerald-400 
                     transition-all duration-300 animate-slide-up overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Mobile Header */}
            <div className="p-4 bg-zinc-900 border-b-2 border-zinc-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-black uppercase tracking-tight">{project.name}</h3>
                <div className="flex gap-2">
                  <IconButton
                    icon={<Edit className="w-4 h-4" />}
                    onClick={() => console.log('project', project)}
                  />
                  <IconButton
                    icon={<Trash2 className="w-4 h-4" />}
                    onClick={() => console.log('delete project', project.id)}
                  />
                </div>
              </div>
              <p className="text-sm text-zinc-500">{project.description}</p>
            </div>

            {/* Mobile Body */}
            <div className="p-4 space-y-4">
              {/* Team */}
              {project.assignedTeam && (
                <div>
                  <div className="text-xs uppercase tracking-widest text-zinc-600 font-bold mb-2">
                    Team
                  </div>
                  <span className="inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400 text-cyan-400 text-xs uppercase font-bold">
                    {project.assignedTeam}
                  </span>
                </div>
              )}

              {/* Environment Variables */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-xs uppercase tracking-widest text-zinc-600 font-bold">
                    Environment Variables ({project?.envVars?.length || 0})
                  </div>
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

              {/* Members */}
              {project.assignedMembers && project.assignedMembers.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-widest text-zinc-600 font-bold mb-2">
                    Assigned Members
                  </div>
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
          </div>
        ))}
      </div>
    </div>
  );
};