import { CartObjNew } from '../../../common/interfaces';
import { cartType } from '../../constants';



interface initialPizzasCart {
    pizzasCart: CartObjNew[]
}
export interface ActionCart {
    type: string,
    payload: CartObjNew[]
}

const initialState: initialPizzasCart = {
    pizzasCart: []
}

const pizzasCartReducer = (
    state = initialState,
    action: ActionCart
): initialPizzasCart => {
    switch (action.type) {
        case cartType.ADD_PIZZASCART:
            return { ...state, pizzasCart: action.payload }
        default:
            return state
    }
}
export default pizzasCartReducer