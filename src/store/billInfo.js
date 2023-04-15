import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// const useBillInfoStore = create((set) => ({
//     billInfo: [],
//     setBillInfo: (billInfo) => set(() => ({ billInfo })),
// }))
const useBillInfoStore = create(
    persist(
        (set) => ({
            billInfo: null,
            setBillInfo: (billInfo) => set(() => ({ billInfo }))
        }),
        {
            name: 'bill-storage',
        }
    )
)

export { useBillInfoStore }
