"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { 
  Users, 
  FolderKanban, 
  Calendar, 
  UserX, 
  FolderMinus,
  ArrowLeft,
  Edit
} from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useTeam } from "@/app/hooks/teams/useTeam";
import { Team } from "@/types/team";

// Mock hook - replace with your actual hook
// import { useTeam } from "@/app/hooks/teams/useTeam";

export default function TeamDetailPage() {
  const params = useParams();
  const teamId = params.id as string;
  const [removingMemberId, setRemovingMemberId] = useState<string | null>(null);
  const [removingProjectId, setRemovingProjectId] = useState<string | null>(null);
  const {data}=useTeam(teamId)
  const team = data?.data as Team | undefined
  


  const handleRemoveMember = async (memberId: string, memberName: string) => {
    if (!confirm(`Remove ${memberName} from this team?`)) return;
    
    setRemovingMemberId(memberId);
    try {
      // Your API call here
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Member removed successfully");
    } catch (error) {
      toast.error("Failed to remove member");
    } finally {
      setRemovingMemberId(null);
    }
  };

  const handleRemoveProject = async (projectId: string, projectName: string) => {
    if (!confirm(`Remove ${projectName} from this team?`)) return;
    
    setRemovingProjectId(projectId);
    try {
      // Your API call here
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Project removed successfully");
    } catch (error) {
      toast.error("Failed to remove project");
    } finally {
      setRemovingProjectId(null);
    }
  };


  if (!team) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-zinc-700 border-t-emerald-400 rounded-full animate-spin" />
      </div>
    );
  }

 

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/in/teams"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="uppercase tracking-wider text-sm font-bold">Back to Teams</span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">
                Team
              </div>
              <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
              <p className="text-gray-400 text-lg max-w-2xl">{team.description}</p>
            </div>
            <button
              className="px-6 py-3 bg-emerald-400 text-black font-bold uppercase tracking-wider
                       hover:bg-emerald-300 transition-all duration-200 flex items-center gap-2
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                       hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <Edit className="w-5 h-5" />
              Edit Team
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <div className="text-xs uppercase tracking-wider text-gray-400">
                  Created
                </div>
              </div>
              <div className="text-2xl font-bold">{formatDate(team.createdAt.toString())}</div>
            </div>

            <div className="bg-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-emerald-400" />
                <div className="text-xs uppercase tracking-wider text-gray-400">
                  Contributors
                </div>
              </div>
              <div className="text-2xl font-bold">{team.contributors?.length || 0}</div>
            </div>

            <div className="bg-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]">
              <div className="flex items-center gap-3 mb-2">
                <FolderKanban className="w-5 h-5 text-emerald-400" />
                <div className="text-xs uppercase tracking-wider text-gray-400">
                  Assigned Projects
                </div>
              </div>
              <div className="text-2xl font-bold">{team.projects?.length || 0}</div>
            </div>
          </div>
        </div>

        {/* Contributors Table */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            Team Members
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto bg-zinc-900 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]">
            <table className="w-full">
              <thead>
                <tr className="border-b-4 border-black">
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                    Joined
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider text-gray-400">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {team.contributors?.map((member: any) => (
                  <tr
                    key={member.id}
                    className="border-b-4 border-black hover:bg-zinc-800 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <Link 
                        href={`/in/contributors/${member.id}`}
                        className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
                      >
                        {member.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{member.email}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-zinc-800 border border-zinc-700 px-3 py-1 text-sm">
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{formatDate(member.joinedAt)}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleRemoveMember(member.id, member.name)}
                        disabled={removingMemberId === member.id}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-bold text-sm uppercase tracking-wider
                                 hover:bg-red-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                                 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
                                 hover:translate-x-[1px] hover:translate-y-[1px]"
                      >
                        {removingMemberId === member.id ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <UserX className="w-4 h-4" />
                        )}
                        Kick Out
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {(!team.contributors || team.contributors.length === 0) && (
              <div className="text-center py-12 text-gray-500">
                No team members yet
              </div>
            )}
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {team.contributors?.map((member: any) => (
              <div
                key={member.id}
                className="bg-zinc-900 p-4 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <Link 
                      href={`/in/contributors/${member.id}`}
                      className="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      {member.name}
                    </Link>
                    <div className="text-sm text-gray-400 mt-1">{member.email}</div>
                    <div className="inline-block bg-zinc-800 border border-zinc-700 px-3 py-1 text-sm mt-2">
                      {member.role}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Joined: {formatDate(member.joinedAt)}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveMember(member.id, member.name)}
                  disabled={removingMemberId === member.id}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white font-bold text-sm uppercase tracking-wider
                           hover:bg-red-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                           shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
                           hover:translate-x-[1px] hover:translate-y-[1px]"
                >
                  {removingMemberId === member.id ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <UserX className="w-4 h-4" />
                  )}
                  Kick Out
                </button>
              </div>
            ))}

            {(!team.contributors || team.contributors.length === 0) && (
              <div className="text-center py-12 text-gray-500 bg-zinc-900">
                No team members yet
              </div>
            )}
          </div>
        </div>

        {/* Projects Table */}
        <div>
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            Assigned Projects
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto bg-zinc-900 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]">
            <table className="w-full">
              <thead>
                <tr className="border-b-4 border-black">
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                    Project Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                    Description
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-gray-400">
                    Env Variables
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                    Assigned
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider text-gray-400">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {team.projects?.map((project: any) => (
                  <tr
                    key={project.id}
                    className="border-b-4 border-black hover:bg-zinc-800 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <Link 
                        href={`/in/projects/${project.id}`}
                        className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
                      >
                        {project.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-400 max-w-md">
                      {project.description}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block bg-emerald-900/30 border border-emerald-700 px-3 py-1 text-emerald-400 font-bold">
                        {project.envCount}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{formatDate(project.assignedAt)}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleRemoveProject(project.id, project.name)}
                        disabled={removingProjectId === project.id}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-bold text-sm uppercase tracking-wider
                                 hover:bg-red-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                                 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
                                 hover:translate-x-[1px] hover:translate-y-[1px]"
                      >
                        {removingProjectId === project.id ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <FolderMinus className="w-4 h-4" />
                        )}
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {(!team.projects || team.projects.length === 0) && (
              <div className="text-center py-12 text-gray-500">
                No projects assigned yet
              </div>
            )}
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {team.projects?.map((project: any) => (
              <div
                key={project.id}
                className="bg-zinc-900 p-4 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]"
              >
                <div className="mb-3">
                  <Link 
                    href={`/in/projects/${project.id}`}
                    className="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {project.name}
                  </Link>
                  <div className="text-sm text-gray-400 mt-2">{project.description}</div>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="inline-block bg-emerald-900/30 border border-emerald-700 px-3 py-1 text-emerald-400 font-bold text-sm">
                      {project.envCount} ENV
                    </span>
                    <span className="text-xs text-gray-500">
                      Assigned: {formatDate(project.assignedAt)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveProject(project.id, project.name)}
                  disabled={removingProjectId === project.id}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white font-bold text-sm uppercase tracking-wider
                           hover:bg-red-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                           shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
                           hover:translate-x-[1px] hover:translate-y-[1px]"
                >
                  {removingProjectId === project.id ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <FolderMinus className="w-4 h-4" />
                  )}
                  Remove
                </button>
              </div>
            ))}

            {(!team.projects || team.projects.length === 0) && (
              <div className="text-center py-12 text-gray-500 bg-zinc-900">
                No projects assigned yet
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}