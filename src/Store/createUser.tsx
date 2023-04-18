import { create } from 'zustand'

export const useCreateUserStore: any = create((set: any) => ({
  error: false,
  setError: (value: any) => set(() => ({ error: value })),
}));