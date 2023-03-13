import { create } from 'zustand'

export const useStore = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: () => set((state) => ({ isAuthenticated: true })),
}));