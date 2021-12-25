import { getOptionsConstant } from "../constants";
import { CartObjNew } from "../interfaces";

export const getOptions = (arrCart: CartObjNew[], type: string) => {
    if (type === getOptionsConstant.COUNT) {
        return arrCart.map(pizza => pizza.count).reduce((a, b) => a + b, 0);
    } if (type === getOptionsConstant.PRICE) {
        return arrCart.map(pizza => pizza.price).reduce((a, b) => a + b, 0);
    }
}