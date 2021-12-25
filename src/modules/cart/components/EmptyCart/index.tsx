import React from 'react'
import { Link } from 'react-router-dom';
import imgEmptyCart from '../../../common/assets/img/empty-cart.png';
import styles from './EmptyCart.module.scss';

const EmptyCart: React.FC = (): JSX.Element => {
    return (
        <div className={styles.emptyCart}>
            <h2>You have empty cart <>😕</></h2>
            <p>
                Maby are you don`t order pizza.<br />
                If you want order pizza please back to main page.
            </p>
            <img src={imgEmptyCart} alt="Empty cart" />
            <Link to="/" className={styles.btnEmpty}>
                <span>Back</span>
            </Link>
        </div>
    )
}

export default EmptyCart
