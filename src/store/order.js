import { create } from 'zustand'

const useOrderStore = create((set) => ({
    orders: [{
        id: 1,
        date: '21/06/2021',
        phone: '0934795670',
        address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
        total: '1000000đ',
        status: 'pending',
    },
    {
        id: 2,
        date: '21/06/2021',
        phone: '0934795670',
        address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
        total: '200đ',
        status: 'pending',

    },
    {
        id: 3,
        date: '21/06/2021',
        phone: '0934795670',
        address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
        total: '1000000đ',
        status: 'cancel',

    },
    {
        id: 4,
        date: '21/06/2021',
        phone: '0934795670',
        address: '124124 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
        total: '1000000đ',
        status: 'pending',

    },
    {
        id: 5,
        date: '21/06/2021',
        phone: '0934795670',
        address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
        total: '1000000đ',
        status: 'success',

    },
    {
        id: 6,
        date: '21/06/2021',
        phone: '01245',
        address: '22 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
        total: '1000000đ',
        status: 'pending',

    }],
    setOrders: (orders) => set(() => ({ orders }))
}))

export { useOrderStore }
