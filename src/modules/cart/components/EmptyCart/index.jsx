import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div class="cart cart--empty">
            <h2>You have empty cart <icon>😕</icon></h2>
            <p>
                Maby are you don`t order pizza.<br />
                If you want order pizza please back to main page.
            </p>
            <img src="/img/empty-cart.png" alt="Empty cart" />
            <Link to="/" class="button button--black">
                <span>Back</span>
            </Link>
        </div>
    )
}

export default EmptyCart
