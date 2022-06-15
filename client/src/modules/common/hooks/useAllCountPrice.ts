import { useEffect, useState } from "react";
import { CartObjNew } from "../interfaces";

export const useAllCountPrice = (arrCart: CartObjNew[]) => {
    const [allCount, setAllCount] = useState(0);
    const [allPrice, setAllPrice] = useState(0);
    const useGetCount = () => {
        useEffect(() => {
            const allCount = arrCart
                .map((pizza) => pizza.count)
                .reduce((a, b) => a + b, 0);
            setAllCount(allCount);
        }, [arrCart]);
        return allCount;
    };
    const useGetPrice = () => {
        useEffect(() => {
            const allPrice = arrCart
                .map((pizza) => pizza.price)
                .reduce((a, b) => a + b, 0);
            setAllPrice(allPrice);
        }, [arrCart]);
        return allPrice;
    };

    return { useGetCount, useGetPrice };
};
