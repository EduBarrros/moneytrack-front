import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: () => set((state) => ({ isAuthenticated: true })),
  error: false,
  setError: (value) => set((state) => ({ error: value })),
}));