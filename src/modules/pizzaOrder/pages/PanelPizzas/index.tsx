import React, { useCallback, useEffect, useState } from 'react';
import Categories from '../../components/Categories';
import SortByPopUp from '../../components/SortByPopUp';
import PizzaBlock from '../../components/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/actions/filters';
import { loadPizzas, setPizzas } from '../../redux/actions/pizzas';
import { RootState } from '../../../app/store';
import { Pizzas } from '../../../common/interfaces';


const PanelPizzas: React.FC = (): JSX.Element => {

    const dispatch = useDispatch();
    const typeCategories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
    const items = useSelector(({ pizzas }: RootState) => pizzas.items);
    const activeCategory = useSelector(({ filters }: RootState) => filters.category);
    const isLoading = useSelector(({ pizzas }: RootState) => pizzas.loaded);

    useEffect(() => {
        dispatch(loadPizzas(activeCategory));
    }, [activeCategory])



    const changeAtiveCategory = useCallback((nameCategory: string, index: number) => {
        dispatch(setCategory({ nameCategory, index }));

    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={activeCategory} changeAtiveCategory={changeAtiveCategory} typeCategories={typeCategories} />
                <SortByPopUp />
            </div>
            <h2 className="content__title">All Pizzas</h2>
            <div className="content__items">

                {isLoading ? items.map((pizza: Pizzas) => <PizzaBlock key={pizza.id}  {...pizza} />) : <div>Loading...</div>}
            </div>
        </div>
    )
}

export default PanelPizzas;