import { useEffect, useState } from 'react';
import { Pizzas } from '../../common/interfaces';

type sortD = { sortData: Pizzas[] | undefined };

export const useSort = (sortBy: string, category: string, arrayPizzas: Pizzas[]): sortD => {
    const [sortData, setSortData] = useState<Pizzas[]>();
    useEffect(() => {
        switch (sortBy) {
            case 'popularity':
                return setSortData(
                    arrayPizzas.sort((prev: Pizzas, next: Pizzas) => next.rating - prev.rating),
                );
            case 'price':
                return setSortData(
                    arrayPizzas.sort((prev: Pizzas, next: Pizzas) => prev.price - next.price),
                );
            default:
                return setSortData(arrayPizzas);
        }
    }, [sortBy, category, arrayPizzas]);

    return { sortData };
};
