import { create } from 'zustand'

export const useCreateUserStore = create((set) => ({
  error: false,
  setError: (value) => set((state) => ({ error: value })),
}));