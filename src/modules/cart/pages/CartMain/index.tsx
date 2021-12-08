import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../../components/EmptyCart';
import CartPizzaOptionWrapper from '../../components/CartPizzaOptionWrapper';
import { RootState } from '../../../app/store';


const CartMain: React.FC = (): JSX.Element => {
    const pizzasCart = useSelector(({ pizzasCart }: RootState) => pizzasCart.pizzasCart);
    return (
        <>
            {pizzasCart.length > 0 ?
                <div className="container container--cart"><CartPizzaOptionWrapper pizzasCart={pizzasCart} /></div>
                :
                <div className="container"><EmptyCart /></div>}
        </>
    )
}

export default CartMain
