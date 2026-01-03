"use client"
import { useProject } from "@/app/hooks/projects/useProject";
import { useParams } from "next/navigation";




export default function ProjectDetailPage() {
  const params = useParams<{id:string}>()
  if(!params.id){
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Invalid project ID</div>
  }
  const {data} =useProject(params.id)
  console.log(data?.data)
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Project Detail</h1>
        <div>Project ID: {params.id}</div>
      </div>
    </div>
  );
}