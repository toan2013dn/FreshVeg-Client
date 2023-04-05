import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useTokenStore = create()(

    (set) => ({
        token: null,
        setToken: (token) => set(() => ({ token: token }))
    }),

)

export { useTokenStore }
