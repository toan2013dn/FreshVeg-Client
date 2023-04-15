import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// const useOrderInfoStore = create((set) => ({
// selectedAddress: null,
// setSelectedAddress: (selectedAddress) => set(() => ({ selectedAddress })),
// orderNote: '',
// setOrderNote: (orderNote) => set(() => ({ orderNote })),
// orderDate: null,
// setOrderDate: (orderDate) => set(() => ({ orderDate })),
// orderTotal: 0,
// setOrderTotal: (orderTotal) => set(() => ({ orderTotal })),
// orderInfo: null,
// setOrderInfo: (orderInfo) => set(() => ({ orderInfo })),
// selectedPaymentMethod: null,
// setSelectedPaymentMethod: (selectedPaymentMethod) => set(() => ({ selectedPaymentMethod })),
// }))
const useOrderInfoStore = create(
    persist(
        (set) => ({
            selectedAddress: null,
            setSelectedAddress: (selectedAddress) => set(() => ({ selectedAddress })),
            orderNote: '',
            setOrderNote: (orderNote) => set(() => ({ orderNote })),
            orderDate: null,
            setOrderDate: (orderDate) => set(() => ({ orderDate })),
            orderTotal: 0,
            setOrderTotal: (orderTotal) => set(() => ({ orderTotal })),
            orderInfo: null,
            setOrderInfo: (orderInfo) => set(() => ({ orderInfo })),
            selectedPaymentMethod: null,
            setSelectedPaymentMethod: (selectedPaymentMethod) => set(() => ({ selectedPaymentMethod })),
            statusPaymentMethod: false,
            setStatusPaymentMethod: (statusPaymentMethod) => set(() => ({ statusPaymentMethod })),
        }),
        {
            name: 'orderInfo-storage',
        }
    )
)

export { useOrderInfoStore }