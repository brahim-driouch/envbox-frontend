import { Member } from "@/types/team";
import { Edit, Plus, Trash2 } from "lucide-react";
import { IconButton } from "../../shared/iconButton";



type MembersViewProps = {
  onDelete: (id: string) => void;
  membersList: Member[];
};

export function MembersView({  onDelete, membersList }: MembersViewProps) {
     const deleteMember = (id: string) => {
       // TODO: Implement actual delete logic using onDelete prop
       console.log('Delete member:', id);
   };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => {}}
          className="px-6 py-3 bg-purple-400 text-black font-bold uppercase tracking-wider
                   hover:bg-purple-300 transition-all duration-200 flex items-center gap-2
                   shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                   hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          <Plus className="w-5 h-5" />
          New Member
        </button>
      </div>

      <div className="grid gap-4">
        {membersList?.map((member: Member, index: number) => (
          <div
            key={member.id}
            className="bg-zinc-950 border-4 border-zinc-800 p-6 hover:border-purple-400 
                     transition-all duration-300 flex justify-between items-center animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-1">{member.name}</h3>
              <p className="text-sm text-zinc-500">{member.email}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-zinc-900 border border-zinc-700 text-xs uppercase">
                {member.role}
              </span>
            </div>
            <div className="flex gap-2">
              <IconButton
                icon={<Edit className="w-4 h-4" />}
                onClick={() => {}}
                color="purple"
              />
              <IconButton
                icon={<Trash2 className="w-4 h-4" />}
                onClick={() => deleteMember(member.id)}
                color="red"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
