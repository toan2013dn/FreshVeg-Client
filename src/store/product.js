import { create } from 'zustand'

const useProductStore = create((set) => ({
    products: [
        // {
        //     id: 1,
        //     image: 'https://i.pinimg.com/originals/b9/6f/0f/b96f0f12229417ea487e77463b29f6f8.jpg',
        //     name: 'Hạt chi đó',
        //     price: 50000,
        // }, {
        //     id: 2,
        //     image: 'https://i.pinimg.com/originals/b9/6f/0f/b96f0f12229417ea487e77463b29f6f8.jpg',
        //     name: 'Hạt chi đó',
        //     price: 50000,
        // }, {
        //     id: 3,
        //     image: 'https://i.pinimg.com/originals/b9/6f/0f/b96f0f12229417ea487e77463b29f6f8.jpg',
        //     name: 'Hạt chi đó',
        //     price: 50000,
        // }, {
        //     id: 4,
        //     image: 'https://i.pinimg.com/originals/b9/6f/0f/b96f0f12229417ea487e77463b29f6f8.jpg',
        //     name: 'Hạt chi đó',
        //     price: 50000,
        // }, {
        //     id: 5,
        //     image: 'https://i.pinimg.com/originals/b9/6f/0f/b96f0f12229417ea487e77463b29f6f8.jpg',
        //     name: 'Hạt chi đó',
        //     price: 50000,
        // }, {
        //     id: 6,
        //     image: 'https://i.pinimg.com/originals/b9/6f/0f/b96f0f12229417ea487e77463b29f6f8.jpg',
        //     name: 'Hạt chi đó',
        //     price: 50000,
        // },
    ],

    setProducts: (products) => set(() => ({ products }))
}))

export { useProductStore }