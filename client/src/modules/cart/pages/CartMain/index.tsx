import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../../components/EmptyCart';
import CartPizzaOptionWrapper from '../../components/CartPizzaOptionWrapper';
import { RootState } from '../../../app/store';
import styles from "./CartMain.module.scss";

const CartMain: React.FC = (): JSX.Element => {
    const pizzasCart = useSelector(({ pizzasCart }: RootState) => pizzasCart.pizzas);
    return (
        <>
            {pizzasCart.length > 0 ?
                <div className={styles.cartItems}>
                    <CartPizzaOptionWrapper pizzasCart={pizzasCart} />
                </div>
                :
                <div className={styles.container}>
                    <EmptyCart />
                </div>}
        </>
    )
}

export default CartMain
