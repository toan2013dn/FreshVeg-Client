import { create } from 'zustand'

const useSelectedWeightStore = create((set) => ({
    selectedWeight: 1,
    setSelectedWeight: (selectedWeight) => set(() => ({ selectedWeight }))
}))

export { useSelectedWeightStore }
