import { create } from 'zustand'

const useProductCart = create((set) => ({
    productCart: [],
    setProductCart: (productCart) => set(() => ({ productCart }))
}))

export { useProductCart }
