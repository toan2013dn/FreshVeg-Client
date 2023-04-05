import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// const useUserStore = create()(

//     (set) => ({
//         userInfo: null,
//         setUserInfo: (user) => set(() => ({ userInfo: user }))
//     }),

// )

const useUserStore = create(
    persist(
        (set) => ({
            userInfo: null,
            setUserInfo: (user) => set(() => ({ userInfo: user }))
        }),
        {
            name: 'user-storage',
        }
    )
)

export { useUserStore }
