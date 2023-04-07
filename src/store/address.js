import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserAddressesStore = create((set) => ({
    userAddresses: [],
    setUserAddresses: (userAddresses) => set(() => ({ userAddresses })),
}))

export { useUserAddressesStore }