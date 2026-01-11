import { CreateContributorForm } from "@/app/components/dashboard/contributors/createContributorForm";

export default function CreateMemberPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-full bg-black text-white p-4">
      <div className="w-full">
        <CreateContributorForm />
      </div>
    </div>
  );
}           