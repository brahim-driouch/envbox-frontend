import { ContributorsView } from "@/app/components/dashboard/contributors/contributorsView.tsx";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ContributorsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Contributors</h1>
      <div className="w-full flex justify-end mb-6">
        <Link
          href={"/in/contributors/new"}
          className="px-6 py-3 bg-emerald-400 text-black font-bold uppercase tracking-wider
                   hover:bg-emerald-300 transition-all duration-200 flex items-center gap-2
                   shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                   hover:translate-x-[2] hover:translate-y-[2]"
        >
          <Plus className="w-5 h-5" />
          New Contributor
        </Link>
      </div>

      <ContributorsView />
    </div>
  );
}
