import { useProductCartStore, useOrderInfoStore } from "@/store";
import { useState, useEffect } from "react";

const useTotalPrice = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [setOrderTotal] = useOrderInfoStore(state => [state.setOrderTotal])
    const { productCart } = useProductCartStore();

    useEffect(() => {
        let price = 0;
        productCart.forEach((product) => {
            price += product.price * product.weight / 100;
        });
        setTotalPrice(price);
    }, [productCart]);

    useEffect(() => {
        setOrderTotal(totalPrice)
    }, [totalPrice])

    return { totalPrice };
};

export default useTotalPrice;