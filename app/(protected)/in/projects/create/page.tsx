import { AddProjectForm } from "@/app/components/dashboard/projects/addProjectForm";

export default function CreateProjectPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center p-4">
      <div className="w-full">
        <AddProjectForm />
      </div>
    </div>
  );
}           