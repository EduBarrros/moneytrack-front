import { create } from 'zustand'

export const useDeleteTransactionStore: any = create((set: any) => ({
    error: false,
    setError: (value: any) => set(() => ({ error: value })),
    successDeleteReload: false,
    setSuccessDeleteReload: (value: any) => set(() => ({ successDeleteReload: value })),
    loadingDeleting: false,
    setLoadingDeleting: (value: any) => set(() => ({ loadingDeleting: value })),
    showDeleteModal: false,
    setShowDeleteModal: (value: any) => set(() => ({  showDeleteModal: value })),
}));