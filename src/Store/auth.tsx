import { create } from 'zustand'

export const useAuthStore: any = create((set: any) => ({
  isAuthenticated: false,
  setIsAuthenticated: () => set(() => ({ isAuthenticated: true })),
  error: false,
  setError: (value: string) => set(() => ({ error: value })),
  userId: '',
  setUserId: (value: string) => set(() => ({ userId: value}))
}));