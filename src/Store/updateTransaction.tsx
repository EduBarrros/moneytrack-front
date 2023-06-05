import { create } from 'zustand'

export const useUpdateTransactionStore: any = create((set: any) => ({
    error: false,
    setError: (value: any) => set(() => ({ error: value })),
    successUpdateReload: false,
    setSuccessUpdateReload: (value: any) => set(() => ({ successUpdateReload: value })),
    loadingUpdateting: false,
    setLoadingUpdating: (value: any) => set(() => ({ loadingUpdating: value })),
    showUpdateModal: false,
    setShowUpdateModal: (value: any) => set(() => ({ showUpdateModal: value })),
    newValue: 0,
    setNewValue: (value: any) => set(() => ({ newValue: value })),
    newDescription: '',
    setNewDescription: (value: any) => set(() => ({ newDescription: value }))
}));