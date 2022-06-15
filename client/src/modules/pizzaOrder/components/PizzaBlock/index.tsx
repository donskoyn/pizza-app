import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPizzasCart } from '../../../cart/redux/actions/cartPizzas';
import { useControlCart } from '../../../common/hooks/useControlCart';
import { RootState } from '../../../app/store';
import { Pizzas } from '../../../common/interfaces';
import styles from './PizzaBlock.module.scss';
import { useLike } from '../../hooks/useLike';

const PizzaBlock: React.FC<Pizzas> = ({
    _id,
    imageUrl,
    name,
    types,
    sizes,
    price,
    rating,
    liked,
}): JSX.Element => {
    const dispatch = useDispatch();
    const userData = useSelector(({ userData }: RootState) => userData.user);
    const cardPizzas = useSelector(({ pizzasCart }: RootState) => pizzasCart.pizzas);
    const isAuth = useSelector(({ userData }: RootState) => userData.isAuth);
    const { checkLiked, like, isLiked } = useLike(userData, _id, liked, rating, dispatch);
    const { saveInCart } = useControlCart(cardPizzas, (newPizzasCartArr) => {
        dispatch(addPizzasCart(newPizzasCartArr));
    });
    const arrTypePizza = ['Thin', 'Traditional'];
    const avilableSizes = [26, 30, 40];
    const [checkAvalibleSize, setCheckAvalibleSize] = useState(true);
    const [activeTypeIndex, setActiveTypeIndex] = useState(0);
    const [countPizzas, setCountPizzas] = useState(0);
    const [activeSize, setActiveSize] = useState(100);
    const changeActiveType = (index: number) => setActiveTypeIndex(index);
    const changeActiveSize = (index: number) => setActiveSize(index);

    useEffect(() => {
        const getCountPizzasInCard: number = cardPizzas
            .filter((pizza) => pizza._id === _id)
            .map((pizzacount) => pizzacount.count)
            .reduce((a, b) => a + b, 0);
        setCountPizzas(getCountPizzasInCard);
    }, []);

    const AddToCard = () => {
        if (activeSize === 100) {
            setCheckAvalibleSize(false);
        } else {
            setCheckAvalibleSize(true);
            const objCard = {
                _id,
                imageUrl,
                name,
                price,
                type: arrTypePizza[activeTypeIndex],
                size: avilableSizes[activeSize],
                count: 1,
            };
            saveInCart(objCard);
            setCountPizzas(countPizzas + 1);
        }
    };

    return (
        <div className={styles.pizzaBlock}>
            <img className={styles.image} src={imageUrl} alt="Pizza" />
            <h4 className={styles.title}>{name}</h4>
            {isAuth && (
                <div className={styles.wrapperRaiting}>
                    <span className={styles.numberRaiting}>{like}</span>
                    <svg
                        onClick={checkLiked}
                        className={styles.like}
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="heart"
                        width="1.4em"
                        height="1.4em"
                        fill={isLiked ? 'red' : 'lightgreen'}
                        aria-hidden="true"
                    >
                        <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                    </svg>
                </div>
            )}
            <div className={styles.selector}>
                <ul>
                    {types.length === 1
                        ? arrTypePizza.map((typePizza, index) => {
                              return (
                                  <li
                                      key={`${_id}_${index}`}
                                      className={
                                          types.includes(typePizza)
                                              ? styles.active
                                              : styles.disabled
                                      }
                                  >
                                      {typePizza}
                                  </li>
                              );
                          })
                        : arrTypePizza.map((typePizza, index) => {
                              return (
                                  <li
                                      key={`${_id}_${index}`}
                                      onClick={() => changeActiveType(index)}
                                      className={activeTypeIndex === index ? styles.active : ''}
                                  >
                                      {typePizza}
                                  </li>
                              );
                          })}
                </ul>
                <span className={styles.wrapperCheckPizza}>
                    {!checkAvalibleSize && (
                        <div className={styles.checkSizePizza}>Choose you size pizza!!</div>
                    )}
                </span>
                <ul>
                    {avilableSizes.map((size, index) => {
                        return (
                            <li
                                key={`${_id}_${index}`}
                                onClick={() => {
                                    changeActiveSize(index);
                                    setCheckAvalibleSize(true);
                                }}
                                className={`${!sizes.includes(size) && styles.disabled} ${
                                    activeSize === index && styles.active
                                } ${!checkAvalibleSize && styles.dontChooseSize}`}
                            >
                                {size} cm.
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.bottom}>
                <div className={styles.price}>{price} $</div>
                <div className={styles.addTocart} onClick={AddToCard}>
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
                    <span>ADD</span>
                    {countPizzas > 0 ? <i>{countPizzas}</i> : <i className={styles.emptyCount}></i>}
                </div>
            </div>
        </div>
    );
};

export default PizzaBlock;
