'use client'

import { createContext, useContext, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getSessionAction } from '@/app/actions/userActions/getSessionAction'
import { LoadingInline } from '@/app/components/shared/loading'
import { LoggedInUser } from './types/userTypes'
import { useRouter, usePathname } from 'next/navigation'

interface AuthContextType {
  isAuthenticated: boolean;
  user: LoggedInUser | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Define public routes that don't require authentication
const PUBLIC_ROUTES = ['/', '/login', '/signup', '/forgot-password','/docs','/salodri']

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()
    
    const { data, isLoading, isError } = useQuery({
        queryKey: ['auth'],
        queryFn: getSessionAction,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
    
    const value = {
        isAuthenticated: data?.isAuthenticated ?? false,
        user: data?.user as LoggedInUser | null,
        isLoading,
        isError,
        error: data?.error ?? null
    }

    useEffect(() => {
        if (!isLoading && !value.isAuthenticated) {
            const isPublicRoute = PUBLIC_ROUTES.includes(pathname)
            if (!isPublicRoute) {
                router.push("/auth/login")
            }
        }
    }, [isLoading, value.isAuthenticated, pathname, router])

    if (isLoading) {
        return <LoadingInline />
    }
  
    return (
        <AuthContext.Provider value={value}>
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