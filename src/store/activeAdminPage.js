import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useActiveAdminPageStore = create((set) => ({
    activeAdminPage: 'order',
    setActiveAdminPage: (activeAdminPage) => set(() => ({ activeAdminPage })),
}))

export { useActiveAdminPageStore }