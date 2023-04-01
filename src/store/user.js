import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create()(

    (set) => ({
        userInfo: null,
        setUserInfo: (user) => set(() => ({ userInfo: user }))
    }),

)

export { useUserStore }
