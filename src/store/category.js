import { create } from 'zustand'

const useCategoriesStore = create((set) => ({
    categories: [],
    setCategories: (categories) => set({ categories }),
}))

export { useCategoriesStore }