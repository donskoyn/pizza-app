
// axios.get(`http://localhost:3001/pizzas${ category.nameCategory==="All"?'':'?category='+category.nameCategory}`).then(({ data }) => {
//         dispatch(setPizzas(data));
// })

import { pizzaOrderTypes } from '../../constants';
import axios from 'axios';
import { Pizzas } from '../../../common/interfaces';
import { Category, SortBy } from '../types';


interface SetPizzas {
    type: string,
    payload: Pizzas[]
}
interface SetLoaded {
    type: string,
    payload: boolean
}

export const setPizzas = (items: Pizzas[]): SetPizzas => ({
    type: pizzaOrderTypes.SET_PIZZAS,
    payload: items
});
export const setLoaded = (payload: boolean): SetLoaded => ({
    type: pizzaOrderTypes.SET_LOADED,
    payload,
});

export const loadPizzas = (category: Category, sortBy: SortBy) => (dispatch: Function) => {

    dispatch({
        type: pizzaOrderTypes.SET_LOADED,
        payload: false
    });


    axios.get(`http://localhost:3001/pizzas?${category.nameCategory === "All" ? '' : 'category=' + category.nameCategory}&_sort=${sortBy.sortName}`).then(({ data }) => {
        dispatch(setPizzas(data));
    })
    setTimeout(() => {
        dispatch({
            type: pizzaOrderTypes.SET_LOADED,
            payload: true
        });
    }, 500)


}
