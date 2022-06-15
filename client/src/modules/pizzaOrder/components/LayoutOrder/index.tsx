import React, { useCallback, useEffect } from 'react';
import Categories from '../../components/Categories';
import SortByPopUp from '../../components/SortByPopUp';
import PizzaBlock from '../../components/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/actions/filters';
import { loadPizzas } from '../../redux/actions/pizzas';
import { RootState } from '../../../app/store';
import { Pizzas } from '../../../common/interfaces';
import LoadingBlock from '../../../common/components/LoadingBlock';
import styles from './LayoutOrder.module.scss';
import { useSort } from '../../hooks/useSort';

const LayoutOrder: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const typeCategories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
    const pizzasData = useSelector(({ pizzas }: RootState) => pizzas);
    const filter = useSelector(({ filters }: RootState) => filters);
    const { sortData } = useSort(
        filter.sortBy.sortName,
        filter.category.nameCategory,
        pizzasData.items,
    );

    useEffect(() => {
        dispatch(loadPizzas(filter.category));
    }, [filter.category, filter.sortBy]);

    const changeAtiveCategory = useCallback(
        (nameCategory: string, index: number) => {
            filter.category.nameCategory !== nameCategory &&
                dispatch(setCategory({ nameCategory, index }));
        },
        [filter.category],
    );

    return (
        <div className={styles.container}>
            <div className={styles.contentTop}>
                <Categories
                    activeCategory={filter.category}
                    changeAtiveCategory={changeAtiveCategory}
                    typeCategories={typeCategories}
                />
                <SortByPopUp />
            </div>
            <h2 className={styles.title}>All Pizzas</h2>

            <div className={styles.items}>
                {pizzasData.loaded
                    ? sortData &&
                      sortData.map((pizza: Pizzas) => <PizzaBlock key={pizza._id} {...pizza} />)
                    : Array(12)
                          .fill(0)
                          .map((_, i) => {
                              return <LoadingBlock key={i} />;
                          })}
            </div>
        </div>
    );
};

export default LayoutOrder;
