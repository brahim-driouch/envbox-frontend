'use client';

import { useState } from 'react';
import { Plus,  Users, Box, Trash2, Edit, Eye, EyeOff, X } from 'lucide-react';
import { LoadingInline } from '@/app/components/shared/loading';
import { Sidebar } from '@/app/components/dashboard/sidebar';
import { useAuth } from '@/authProvider';
import { FormField } from '@/app/components/shared/formField';
import { Member } from '@/types/team';
import { Project } from '@/types/project';
import { MembersView } from '@/app/components/dashboard/members/memebrsView';
import { Stats } from '@/app/components/dashboard/stats';



export default function DashboardPage() {
  const projectsLength = 0;

const data = useAuth();
  if(data.isLoading) return <LoadingInline/>
  if(data.isError) return <div className="text-red-500">Error: {data.error}</div>
 
 


 
  return (
    <div className="min-h-screen w-full font-mono">
      <Stats/>
     
     
    </div>
  );
}













