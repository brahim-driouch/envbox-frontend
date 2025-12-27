'use client'

import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getSessionAction } from '@/app/actions/userActions/getSessionAction'
import { LoadingInline } from '@/app/components/shared/loading'
import { LoggedInUser } from './types/userTypes'

interface AuthContextType {
  isAuthenticated: boolean;
  user: LoggedInUser | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['auth'],
        queryFn: getSessionAction,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
    
    const value = {
        isAuthenticated: data?.isAuthenticated ?? false,
        user: data?.user as LoggedInUser | null ,
        isLoading,
        isError,
        error: data?.error ?? null
    }
    
    return (
        <AuthContext.Provider value={value }>
            {isLoading && <LoadingInline />}  {/* ✅ At root level */}
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider')
    }
    return context
}