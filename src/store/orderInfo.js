import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useOrderInfoStore = create((set) => ({
    selectedAddress: null,
    setSelectedAddress: (selectedAddress) => set(() => ({ selectedAddress })),
    orderNote: '',
    setOrderNote: (orderNote) => set(() => ({ orderNote })),
}))

export { useOrderInfoStore }