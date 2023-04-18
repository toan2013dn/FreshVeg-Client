import { create } from "zustand";

export const useAdminStore = create((set) => ({
    tabId: -1,
    setTabId: (id) => set({ tabId: id }),
}));
