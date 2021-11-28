import React, { useEffect, useState } from 'react'
import Categories from '../../common/components/Categories'
import Header from '../../common/components/Header'
import SortByPopUp from '../../common/components/SortByPopUp'
import PizzaBlock from '../PizzaBlock'
import { useSelector, useDispatch } from 'react-redux';
import { setPizzas } from '../../common/redux/actions/pizzas'

const PanelPizzas = ({ isLoading }) => {

    const typeCategories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed']
    const [ativeCategory, setActiveCategory] = useState({ nameCategory: 'All', index: 0 })
    const changeAtiveCategory = (nameCategory, index) => setActiveCategory({ nameCategory, index })

    const { items } = useSelector(({ pizzas }) => {
        return {
            items: pizzas.items
        }
    });



    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories ativeCategory={ativeCategory} changeAtiveCategory={changeAtiveCategory} typeCategories={typeCategories} />
                        <SortByPopUp />
                    </div>
                    <h2 className="content__title">All Pizzas</h2>
                    <div className="content__items">
                        {!isLoading ? items.pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />) : <div>Loading...</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelPizzas;