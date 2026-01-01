import { MembersView } from "@/app/components/dashboard/members/memebrsView";



export default function MembersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Members</h1>
        <div>Members Page</div>
        
        <MembersView
          membersList={[]}
        
          onDelete={() => {}}
        />
      </div>
    </div>
  );
}