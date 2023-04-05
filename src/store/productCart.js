import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// const useProductCartStoreStore = create((set) => ({
//     productCart: [],
//     setProductCart: (productCart) => set(() => ({ productCart }))
// }))

const useProductCartStore = create(
    persist(
        (set) => ({
            productCart: [],
            setProductCart: (productCart) => set(() => ({ productCart }))
        }),
        {
            name: 'product-cart-storage',
        }
    )
)

export { useProductCartStore }
