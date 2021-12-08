import { Pizzas } from '../../../common/interfaces';
import { pizzaOrderTypes } from '../../constants';

interface InitialStates {
    items: Pizzas[],
    loaded: boolean
};

interface ActionStatePizzas {
    type: pizzaOrderTypes.SET_PIZZAS,
    payload: Pizzas[]

};

interface ActionStateLoaded {
    type: pizzaOrderTypes.SET_LOADED,
    payload: boolean
};

type InitialAction = ActionStatePizzas | ActionStateLoaded
const initialState: InitialStates = {
    items: [],
    loaded: false
};

const pizzasReducer = (
    state = initialState,
    action: InitialAction
): InitialStates => {
    switch (action.type) {
        case pizzaOrderTypes.SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                loaded: true
            }
        case pizzaOrderTypes.SET_LOADED:
            return { ...state, loaded: action.payload }
        default:
            return state;
    }
}

export default pizzasReducer;

