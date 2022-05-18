import React, { useCallback, useEffect, useState } from 'react';
import Categories from '../../components/Categories';
import SortByPopUp from '../../components/SortByPopUp';
import PizzaBlock from '../../components/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/actions/filters';
import { loadPizzas, setPizzas } from '../../redux/actions/pizzas';
import { RootState } from '../../../app/store';
import { Pizzas } from '../../../common/interfaces';
import LoadingBlock from '../../../common/components/LoadingBlock';
import styles from './LayoutOrder.module.scss';

const LayoutOrder: React.FC = (): JSX.Element => {

    const dispatch = useDispatch();
    const typeCategories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
    const items = useSelector(({ pizzas }: RootState) => pizzas.items);
    const activeCategory = useSelector(({ filters }: RootState) => filters.category);
    const isLoading = useSelector(({ pizzas }: RootState) => pizzas.loaded);
    const activeSort = useSelector(({ filters }: RootState) => filters.sortBy);

    useEffect(() => {
        dispatch(loadPizzas(activeCategory, activeSort));
    }, [activeCategory, activeSort])



    const changeAtiveCategory = useCallback((nameCategory: string, index: number) => {
        activeCategory.nameCategory !== nameCategory && dispatch(setCategory({ nameCategory, index }));

    }, [activeCategory]);

    return (
        <div className={styles.container}>
            <div className={styles.contentTop}>
                <Categories activeCategory={activeCategory} changeAtiveCategory={changeAtiveCategory} typeCategories={typeCategories} />
                <SortByPopUp />
            </div>
            <h2 className={styles.title}>All Pizzas</h2>
            <div className={styles.items}>

                {isLoading ? items.map((pizza: Pizzas) => <PizzaBlock key={pizza.id}  {...pizza} />) : Array(12).fill(0).map((_, i) => {
                    return <LoadingBlock key={i} />

                })}
            </div>
        </div>
    )
}

export default LayoutOrder;