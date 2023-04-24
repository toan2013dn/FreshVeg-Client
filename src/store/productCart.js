import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useProductCartStore = create(
    persist(
        (set) => ({
            productCart: [],
            setProductCart: (productCart) => set(() => ({ productCart })),
            setProductWeight: (id, weight) => set((state) => {
                const productCart = state.productCart.map((product) => {
                    if (product.product.productId === id) {
                        product.weight = weight
                    }
                    return product
                })
                return { productCart }
            }),
        }),
        {
            name: 'product-cart-storage',
        }
    )
)

export { useProductCartStore }
