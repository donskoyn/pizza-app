
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

export const loadPizzas = (category: Category, sortBy: SortBy) => async (dispatch: Function) => {

    dispatch({
        type: pizzaOrderTypes.SET_LOADED,
        payload: false
    });



    const { data } = await axios.post('http://localhost:5810/api/pizzas', { category: `${category.nameCategory === "All" ? '' : category.nameCategory}` })

    dispatch(setPizzas(data))

    dispatch({
        type: pizzaOrderTypes.SET_LOADED,
        payload: true
    });



}
