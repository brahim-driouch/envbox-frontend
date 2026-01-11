import { CreateTeamForm } from "@/app/components/dashboard/teams/createTeamForm";

export default function CreateNewTeamPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-start justify-center p-4">
      <div className="w-full">
        <CreateTeamForm />
      </div>
    </div>
  );
}           