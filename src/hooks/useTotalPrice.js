import { useProductCartStore } from "@/store";
import { useState, useEffect } from "react";

const useTotalPrice = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const { productCart } = useProductCartStore();

    useEffect(() => {
        let price = 0;
        productCart.forEach((product) => {
            price += product.price * product.weight / 100;
        });
        setTotalPrice(price);
    }, [productCart]);

    return { totalPrice };
};

export default useTotalPrice;