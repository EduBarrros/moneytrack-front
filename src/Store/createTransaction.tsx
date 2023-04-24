import { create } from 'zustand'

export const useCreateTransactionStore: any = create((set: any) => ({
    error: false,
    setError: (value: any) => set(() => ({ error: value })),
    successReload: false,
    setSuccessReload: (value: any) => set(() => ({ successReload: value }))
}));