import { cartType } from "../../constants";
import { ActionCart } from "../reducers/cartPizzas";

export const addPizzasCart = (card: ActionCart) => ({
    type: cartType.ADD_PIZZASCART,
    payload: card
});