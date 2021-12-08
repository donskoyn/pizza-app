
// axios.get(`http://localhost:3001/pizzas${ category.nameCategory==="All"?'':'?category='+category.nameCategory}`).then(({ data }) => {
//         dispatch(setPizzas(data));
// })

import { pizzaOrderTypes } from '../../constants';
import axios from 'axios';
import { Pizzas } from '../../../common/interfaces';
import { Category } from '../types';


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

export const loadPizzas = (category: Category) => (dispatch: Function) => {

    dispatch({
        type: pizzaOrderTypes.SET_LOADED,
        payload: false
    });


    axios.get('http://localhost:3000/db.json').then(({ data }) => {
        dispatch(setPizzas(data.pizzas));
    })

}

//как описать диспатч