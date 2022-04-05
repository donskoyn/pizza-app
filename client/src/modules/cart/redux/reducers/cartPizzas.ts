import { CartObjNew } from '../../../common/interfaces';
import { cartType } from '../../constants';



interface initialPizzasCart {
    pizzas: CartObjNew[]
}
export interface ActionCart {
    type: string,
    payload: CartObjNew[]
}

const initialState: initialPizzasCart = {
    pizzas: []
}

const pizzasCartReducer = (
    state = initialState,
    action: ActionCart
): initialPizzasCart => {
    switch (action.type) {
        case cartType.ADD_PIZZASCART:
            return { ...state, pizzas: action.payload }
        default:
            return state
    }
}
export default pizzasCartReducer