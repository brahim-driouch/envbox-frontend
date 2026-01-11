"use client"
import { Edit, Trash2, Mail, User } from "lucide-react";
import { IconButton } from "../../shared/iconButton";
import { useAuth } from "@/authProvider";
import { useContributors } from "@/app/hooks/contributors/useContributors";
import { Contributor } from "@/types/contributor";
import Link from "next/link";

export function ContributorsView() {
  const {user} = useAuth()
  const userId = user ? user.id : ""
  const { data } = useContributors(userId)
  const contributorsList = data?.data

  return (
    <div className="w-full space-y-6 animate-fade-in">
      <div className="overflow-x-auto border-4 border-zinc-800 bg-zinc-950">
        <table className="w-full min-w-[600]">
          <thead>
            <tr className="border-b-4 border-zinc-800">
              <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-black uppercase tracking-wider text-zinc-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Name</span>
                </div>
              </th>
              <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-black uppercase tracking-wider text-zinc-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Email</span>
                </div>
              </th>
              <th className="px-4 md:px-6 py-4 text-right text-xs md:text-sm font-black uppercase tracking-wider text-zinc-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {contributorsList?.map((contributor: Contributor, index: number) => (
              <tr
                key={contributor.id}
                className="border-b-4 border-zinc-800 hover:bg-zinc-900 transition-colors duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="px-4 md:px-6 py-4">
                  <span className="text-base md:text-lg font-bold text-white block truncate max-w-[150px] md:max-w-none">
                    {contributor.fullname}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4">
                  <span className="text-sm md:text-base text-zinc-400 block truncate max-w-[150px] md:max-w-none">
                    {contributor.email}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/in/contributors/${contributor.id}`}>
                      <IconButton
                      icon={<Edit className="w-4 h-4" />}
                    />
                    </Link>
                  
                    <IconButton
                      icon={<Trash2 className="w-4 h-4" />}
                      onClick={() => {}}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {(!contributorsList || contributorsList.length === 0) && (
          <div className="text-center py-12 text-zinc-500">
            No contributors found
          </div>
        )}
      </div>
    </div>
  );
}