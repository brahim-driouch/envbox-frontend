"use client";


import { TeamsView } from "@/app/components/dashboard/teams/teamsView";
import { Plus } from "lucide-react";

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
          <div className="flex justify-end mb-6">
        <button
          className="px-6 py-3 bg-cyan-400 text-black font-bold uppercase tracking-wider
                   hover:bg-cyan-300 transition-all duration-200 flex items-center gap-2
                   shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                   hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          <Plus className="w-5 h-5" />
          New Team
        </button>
      </div>
        <h1 className="text-3xl font-bold mb-6">Teams</h1>
        <TeamsView />
      </div>
    </div>  
  );
}