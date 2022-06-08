import { AxiosConfig } from "../http"
import { CartObjNew } from "../interfaces"

interface payOrderInterface {
    email: string;
    cart: CartObjNew[]
}
export const payOrder = async (cartOrder: payOrderInterface, dispatch: Function) => {

    const axios = AxiosConfig(dispatch);
    const { data } = await axios.post('/addtocart', cartOrder);
    return data
}
