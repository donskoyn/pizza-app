import { changeCountPizzaConstant } from '../constants';
import { CartObjNew } from '../interfaces';

export const useControlCart = (arrCarts: CartObjNew[], callback: (cart: CartObjNew[]) => void) => {
    const newArr = [...arrCarts];

    const removeCard = (index: number) => {
        newArr.splice(index, 1);
        callback(newArr);
    };

    const changeCountPizza = (index: number, price: number, count: number, action: string) => {
        if (action === changeCountPizzaConstant.PLUS) {
            newArr[index].count++;
            newArr[index].price += price / count;
        }
        if (action === changeCountPizzaConstant.MINUS) {
            if (count !== 1) {
                newArr[index].count--;
                newArr[index].price -= price / count;
            } else {
                newArr.splice(index, 1);
            }
        }
        callback(newArr);
    };

    const saveInCart = (objNewCart: CartObjNew) => {
        const findObj = arrCarts.find(
            (pizza) =>
                pizza._id === objNewCart._id &&
                pizza.type === objNewCart.type &&
                pizza.size === objNewCart.size,
        );
        if (findObj) {
            findObj.count++;
            findObj.price += objNewCart.price;
            const newCard = arrCarts.filter(
                (v, i, a) =>
                    a.findIndex(
                        (findObj) =>
                            findObj._id === v._id &&
                            findObj.type === v.type &&
                            findObj.size === v.size,
                    ) === i,
            );
            callback(newCard);
        } else {
            callback([...arrCarts, objNewCart]);
        }
    };
    return { removeCard, changeCountPizza, saveInCart };
};
