import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import CartPizzaOptionWrapper from '../CartPizzaOptionWrapper';
import EmptyCart from '../EmptyCart';
import styles from './LayoutCart.module.scss';

const LayoutCart = () => {
    const pizzasCart = useSelector(({ pizzasCart }: RootState) => pizzasCart.pizzas);

    return (
        <div className={styles.wrapper}>
            {pizzasCart.length > 0 ?
                <div className={styles.cartItems}>
                    <CartPizzaOptionWrapper pizzasCart={pizzasCart} />
                </div>
                :
                <div className={styles.container}>
                    <EmptyCart />
                </div>}
        </div>
    )
}

export default LayoutCart