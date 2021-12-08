export const useControlCart=(arrCarts,callback)=>{
    const newArr=[...arrCarts];
    

    const removeCard = (index) => {
        newArr.splice(index, 1);
        callback (newArr);
    }

    const changeCountPizza = (index,price,count,action) => {
        if(action==='PLUS'){
            newArr[index].count++;
            newArr[index].price += price / count;
        }
        if(action==='MINUS'){
            if(count!==1){
                newArr[index].count--;
                newArr[index].price -= price / count;
            }else{
                newArr.splice(index, 1);
            }
        }
        callback(newArr);
    }


    const saveInCart=(objNewCart)=>{
        
        let findObj = arrCarts.find(pizza => pizza.id === objNewCart.id && pizza.type === objNewCart.type && pizza.size === objNewCart.size);
        if (findObj) {
            findObj.count++
            findObj.price += objNewCart.price
            const newCard = arrCarts.filter((v, i, a) => a.findIndex(findObj => (findObj.id === v.id && findObj.type === v.type && findObj.size === v.size)) === i);
            callback(newCard);
        }
        else {
            callback([...arrCarts, objNewCart]);
        }
    }
    return {removeCard,changeCountPizza,saveInCart}
}