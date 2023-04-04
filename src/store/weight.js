import { create } from 'zustand'

const useSelectedWeight = create((set) => ({
    selectedWeight: 1,
    setSelectedWeight: (selectedWeight) => set(() => ({ selectedWeight }))
}))

export { useSelectedWeight }
