"use client"
import { useState } from "react";
import { FormField } from "../../shared/formField";
import { UserPlus } from "lucide-react";
import handleApiError from "@/app/heplers/handleErrors";
import toast from "react-hot-toast";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ContributorCreate } from "@/types/contributor";
import { useAuth } from "@/authProvider";
import { useCreateContributor } from "@/app/hooks/contributors/useCreateMember";

export const CreateContributorForm = () => {
    const mutation = useCreateContributor()
    const queryClient = useQueryClient()
    const router = useRouter()
    const {user} = useAuth()
    
    const [contributorData, setcontributorData] = useState<ContributorCreate>({
        fullname: '',
        email: '',
        userId: user?.id || '',
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const fieldName = e.target.name as keyof ContributorCreate;
        const value = e.target.value;
        
        setcontributorData({...contributorData, [fieldName]: value});
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation
        if (!contributorData.fullname.trim() || contributorData.fullname.trim().length < 2) {
            toast.error('Full name must be at least 2 characters long');
            return;
        }

        if (!contributorData.email.trim() || !contributorData.email.includes('@')) {
            toast.error('Please enter a valid email address');
            return;
        }

        try {
            const response = await mutation.mutateAsync(contributorData);
            if (!response.success) {
                throw new Error(response.error || 'Failed to create member');
            }
            
            await queryClient.invalidateQueries({ queryKey: ['dashboard-stats'] });
            await queryClient.invalidateQueries({ queryKey: ['members',user?.id] });
            toast.success(response.message || 'Contributor created successfully!');
            router.push("/in/contributors")
        } catch (error) {
            const errorMessage = handleApiError(error)
            toast.error(errorMessage || 'Failed to create contributor');
        }
    };

    return (
        <div className="w-full bg-zinc-900 border-2 border-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">
                Add New Member
            </h2>
            
            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div className="w-full grid grid-cols-1 gap-4">
                    <FormField
                        label="Full Name*"
                        value={contributorData.fullname}
                        onChange={onChange}
                        placeholder="Enter full name"
                        name="fullname"
                        required
                    />
                    
                    <FormField
                        label="Email*"
                        value={contributorData.email}
                        onChange={onChange}
                        placeholder="member@example.com"
                        name="email"
                        type="email"
                        required
                    />
                </div>

           

                <div className="flex gap-4 justify-end pt-4">
                    {/* Cancel Button */}
                    <Link 
                        href="/in/members" 
                        className="px-6 py-3 bg-zinc-800 text-white font-bold uppercase tracking-wider
                                   hover:bg-zinc-700 transition-all duration-200 
                                   border-2 border-zinc-700 hover:border-zinc-600
                                   flex items-center justify-center gap-2"
                    >
                        Cancel
                    </Link>
                    
                    {/* Save Button */}
                    <button    
                        disabled={mutation.isPending}
                        type="submit"
                        className={`px-6 py-3 font-bold uppercase tracking-wider
                                    transition-all duration-200 flex items-center justify-center gap-2
                                    ${mutation.isPending
                                      ? "bg-zinc-700 text-zinc-500 cursor-not-allowed border-2 border-zinc-600"
                                      : "bg-emerald-400 text-black border-2 border-black hover:bg-emerald-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                                    }`}
                    >
                        {mutation.isPending ? (
                            <>
                                <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
                                <span>Creating...</span>
                            </>
                        ) : (
                            <>
                                <UserPlus className="w-5 h-5" />
                                <span>Create Member</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}