"use client";
import { useContributor } from "@/app/hooks/contributors/useContributor";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Pause, Play, UserX, Mail, Briefcase, Calendar, Users } from "lucide-react";

export default function MemberDetailPage() {
  const params = useParams();
  const id = params.id;
  const { data } = useContributor(id as string);
  const [isPaused, setIsPaused] = useState(false);

  if (!data?.success) {
    return null;
  }

  const contributor = data.data;

  const handleKickOut = () => {
    if (confirm(`Remove ${contributor?.fullname} from all projects?`)) {
      console.log("Kicking out contributor");
    }
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">
            Contributor
          </div>
          <h1 className="text-4xl font-bold mb-6">{contributor?.fullname  || "Unknown"}</h1>
          
          <div className="flex gap-4">
            <button
              onClick={handleTogglePause}
              className={`px-6 py-3 ${
                isPaused ? "bg-emerald-400" : "bg-yellow-400"
              } text-black font-bold uppercase tracking-wider
                       hover:bg-opacity-80 transition-all duration-200 flex items-center gap-2
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                       hover:translate-x-[2px] hover:translate-y-[2px]`}
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              {isPaused ? "Resume Access" : "Pause Access"}
            </button>
            <button
              onClick={handleKickOut}
              className="px-6 py-3 bg-red-500 text-white font-bold uppercase tracking-wider
                       hover:bg-red-400 transition-all duration-200 flex items-center gap-2
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                       hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <UserX className="w-5 h-5" />
              Kick Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contributor Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]">
              <h2 className="text-xl font-bold mb-4 uppercase tracking-wider">
                Info
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <Mail className="w-4 h-4" />
                    <span className="uppercase tracking-wider">Email</span>
                  </div>
                  <div className="text-white">{contributor?.email || "—"}</div>
                </div>
                {/* <div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span className="uppercase tracking-wider">Role</span>
                  </div>
                  <div className="text-white">{contributor?.role || "—"}</div>
                </div> */}
                <div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="uppercase tracking-wider">Joined</span>
                  </div>
                  <div className="text-white">{contributor?.createdAt || "—"}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-2 uppercase tracking-wider">
                    Status
                  </div>
                  <div
                    className={`inline-block px-4 py-2 font-bold uppercase tracking-wider ${
                      isPaused ? "bg-yellow-400 text-black" : "bg-emerald-400 text-black"
                    }`}
                  >
                    {isPaused ? "⏸ Paused" : "✓ Active"}
                  </div>
                </div>
              </div>
            </div>

            {/* Dev Team */}
            <div className="bg-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]">
              <h2 className="text-xl font-bold mb-4 uppercase tracking-wider flex items-center gap-2">
                <Users className="w-5 h-5" />
                Dev Team
              </h2>
              <div className="bg-zinc-800 p-4">
                <div className="font-bold text-lg text-emerald-400">
                  {contributor?.team?.name || "NO TEAM"}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {contributor?.team?.members?.length || 0} members
                </div>
              </div>
            </div>
          </div>

          {/* Assigned Projects */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold uppercase tracking-wider">
                  Assigned Projects
                </h2>
                <div className="text-emerald-400 font-bold">
                  {contributor?.projects?.length || 0} Projects
                </div>
              </div>

              {contributor?.projects && contributor.projects.length > 0 ? (
                <div className="space-y-4">
                  {contributor?.projects?.map((project: any, index: number) => (
                    <div
                      key={project.id || index}
                      className="bg-zinc-800 p-5 hover:bg-zinc-700 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-emerald-400 mb-3">
                            {project.name}
                          </h3>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 uppercase tracking-wider text-xs mb-1">
                                Env Access
                              </div>
                              <div className="text-white font-medium">
                                {project.envAccess || "READ_WRITE"}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-400 uppercase tracking-wider text-xs mb-1">
                                Keys
                              </div>
                              <div className="text-white font-medium">
                                {project.keysCount || "—"}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-400 uppercase tracking-wider text-xs mb-1">
                                Last Access
                              </div>
                              <div className="text-white font-medium">
                                {project.lastAccessed || "—"}
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="px-4 py-2 bg-red-500 text-white font-bold text-sm uppercase tracking-wider
                                   hover:bg-red-400 transition-all duration-200
                                   shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
                                   hover:translate-x-[1px] hover:translate-y-[1px]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-zinc-800 p-12 text-center">
                  <div className="text-gray-500 text-6xl mb-4">∅</div>
                  <div className="text-xl font-bold text-gray-400 uppercase tracking-wider">
                    No Projects Assigned
                  </div>
                </div>
              )}
            </div>

            {/* Access Log */}
            <div className="bg-zinc-900 p-6 mt-6 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)]">
              <h2 className="text-xl font-bold mb-4 uppercase tracking-wider">
                Recent Activity
              </h2>
              <div className="bg-black p-4 font-mono text-sm space-y-2">
                <div className="text-emerald-400">
                  [2026-01-08 14:23:01] GET /env/project-alpha SUCCESS
                </div>
                <div className="text-emerald-400">
                  [2026-01-08 12:15:33] UPDATE /env/project-beta SUCCESS
                </div>
                <div className="text-emerald-400">
                  [2026-01-07 09:45:12] GET /env/project-gamma SUCCESS
                </div>
                <div className="text-yellow-400">
                  [2026-01-06 16:30:00] DELETE /env/old-key SUCCESS
                </div>
                <div className="text-red-400">
                  [2026-01-05 11:22:45] GET /env/restricted DENIED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}