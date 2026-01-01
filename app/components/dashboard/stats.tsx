import { useDashboardStats } from "@/app/hooks/stats/useDashboardStats";
import { useAuth } from "@/authProvider";

  const StatBadge = ({ label, value, color }: any) => {
  const colors = {
    emerald: 'from-emerald-400 to-emerald-600',
    cyan: 'from-cyan-400 to-cyan-600',
    purple: 'from-purple-400 to-purple-600',
  };
    return (
    <div className="w-full bg-zinc-900 border-2 border-zinc-800 p-4">
      <div className={`text-3xl font-black bg-linear-to-r ${colors[color as keyof typeof colors]} bg-clip-text text-transparent mb-1`}>
        {value}
      </div>
      <div className="text-xs text-zinc-500 uppercase tracking-widest">{label}</div>
    </div>
  );
  } 
export const Stats =()=>{
  const auth = useAuth();
  const userId = auth.user?.id;
  const { data }= useDashboardStats(userId || ""); // TODO: use actual ID
  return (
         <div className="mt-12 flex justify-between items-start px-6 space-x-4 space-y-4 pt-8 border-t-2 border-zinc-800">
              <StatBadge label="Projects" value={data?.data?.projectsCount || 0} color="emerald" />
              <StatBadge label="Teams" value={data?.data?.teamsCount || 0} color="cyan" />
              <StatBadge label="Members" value={data?.data?.membersCount || 0} color="purple" />
            </div>
    )
}