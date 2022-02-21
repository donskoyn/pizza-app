import { CartObjNew } from "../../../common/interfaces";
import { cartType } from "../../constants";

export const addPizzasCart = (card: CartObjNew[]) => ({
    type: cartType.ADD_PIZZASCART,
    payload: card
});