
"use client"
import { AddProjectForm } from "@/app/components/dashboard/projects/addProjectForm";
import { Modal } from "@/app/components/shared/modal";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";




export default function ProjectsPage() {

  
  return (
    <div className="min-h-screen bg-black text-white">
        
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className="flex justify-end mb-6">
        <Link href="/in/projects/create"
        
         
          className="px-6 py-3 bg-emerald-400 text-black font-bold uppercase tracking-wider
                   hover:bg-emerald-300 transition-all duration-200 flex items-center gap-2
                   shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                   hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          <Plus className="w-5 h-5" />
          New Project
        </Link>
      </div>
      </div>
    </div>
  );
}