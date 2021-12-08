import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { addPizzasCart } from '../../../cart/redux/actions/cartPizzas'
import { useSelector } from 'react-redux';
import { useControlCart } from '../../../common/hooks/useControlCart';
import { RootState } from '../../../app/store';
import { Pizzas } from '../../../common/interfaces';



const PizzaBlock: React.FC<Pizzas> = ({ id, imageUrl, name, types, sizes, price, category, rating }): JSX.Element => {

    const dispatch = useDispatch();
    const arrTypePizza = ["Thin", "Traditional"];
    const avilableSizes = [26, 30, 40];
    const [activeTypeIndex, setActiveTypeIndex] = useState(0);
    const [countPizzas, setCountPizzas] = useState(0);
    const [activeSize, setactiveSize] = useState(100);
    const changeActiveType = (index: number) => setActiveTypeIndex(index);
    const changeActiveSize = (index: number) => setactiveSize(index);
    const cardPizzas = useSelector(({ pizzasCart }: RootState) => pizzasCart.pizzasCart);

    const { saveInCart } = useControlCart(cardPizzas, (newPizzasCartArr: any) => {
        dispatch(addPizzasCart(newPizzasCartArr));
    })
    useEffect(() => {
        const getCountPizzasInCard: number = cardPizzas.filter(pizza => pizza.id === id).map(pizzacount => pizzacount.count).reduce((a, b) => a + b, 0);
        setCountPizzas(getCountPizzasInCard)
    }, [])


    const AddToCard = () => {


        if (activeSize === 100) {
            //alert('change size pizza')
        } else {
            const objCard = {
                id,
                imageUrl,
                name,
                price,
                type: arrTypePizza[activeTypeIndex],
                size: avilableSizes[activeSize],
                count: 1
            }
            saveInCart(objCard);
            setCountPizzas(countPizzas + 1);
        }
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        types.length === 1 ?
                            arrTypePizza.map((typePizza, index) => {
                                return <li key={`${id}_${index}`} className={types.includes(typePizza) ? "active" : 'disabled'}>{typePizza}</li>
                            })
                            :
                            arrTypePizza.map((typePizza, index) => {
                                return <li key={`${id}_${index}`} onClick={() => changeActiveType(index)} className={activeTypeIndex === index ? "active" : ''}>{typePizza}</li>
                            })
                    }
                </ul>
                <ul>
                    {avilableSizes.map((size, index) => {
                        return (
                            <li
                                key={`${id}_${index}`}
                                onClick={() => changeActiveSize(index)}
                                className={classNames({
                                    active: activeSize === index,
                                    disabled: !sizes.includes(size)
                                })}>
                                {size} cm.
                            </li >)
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{price} $</div>
                <div className="button button--outline button--add" onClick={AddToCard}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span >ADD</span>
                    {countPizzas > 0 && <i>{countPizzas}</i>}
                </div>
            </div>
        </div >
    )
}

export default PizzaBlock