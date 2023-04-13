import { create } from 'zustand'

const useBillInfoStore = create((set) => ({
    billInfo: [],
    setBillInfo: (billInfo) => set(() => ({ billInfo })),
}))

export { useBillInfoStore }
