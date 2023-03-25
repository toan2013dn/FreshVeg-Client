import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create()(

    (set) => ({
        userInfo: {
            name: 'John Doe',
            image: 'https://cdn.tgdd.vn/Files/2022/03/31/1423196/moi-dieu-can-biet-cho-con-cach-nuoi-cham-soc-va-huan-luyen-202203311033114159.jpg',
            password: '123456',
            email: 'toantran2671@gmail.com',
        },
        setUserInfo: (user) => set(() => ({ userInfo: user }))
    }),

)

export { useUserStore }
