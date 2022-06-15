import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { setSortBy } from '../../redux/actions/filters';
import styles from './SortByPopUp.module.scss';

const SortByPopUp: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const activeSort = useSelector(({ filters }: RootState) => filters.sortBy);
    const [openPopUp, setOpenPopUp] = useState(false);
    const [sortName] = useState(['popularity', 'price']);
    const sortRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const changeActivePopUp = () => setOpenPopUp(!openPopUp);

    const changeActiveSortObj = useCallback((sortName: string, index: number) => {
        dispatch(setSortBy({ sortName, index }));
    }, []);

    const handleOutsideClick = (event: any): void => {
        !event.path.includes(sortRef.current) && setOpenPopUp(false);
    };
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div ref={sortRef} className={styles.sort}>
            <div className={styles.__label}>
                <svg
                    className={openPopUp ? styles.rotated : styles.noRotated}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Sort by:</b>
                <span onClick={changeActivePopUp}>{activeSort.sortName}</span>
            </div>
            {openPopUp && (
                <div className={styles.__popup}>
                    <ul>
                        {sortName.map((name: string, i: number) => {
                            return (
                                <li
                                    key={`${name}_${i}`}
                                    onClick={() => changeActiveSortObj(name, i)}
                                    className={
                                        activeSort.sortName === name && activeSort.index === i
                                            ? styles.active
                                            : ''
                                    }
                                >
                                    {name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default React.memo(SortByPopUp);
