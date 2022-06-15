import React from 'react';
import { arrayOrderInterface } from '../../interfaces';
import styles from './HistoryCard.module.scss';

const HistoryCard: React.FC<arrayOrderInterface> = ({
    imageUrl,
    name,
    price,
    type,
    size,
}): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.img}>
                <img src={imageUrl} alt={name} />
            </div>
            <div>
                <div className={styles.name}>
                    <h3>{name}</h3>
                </div>
                <div className={styles.type}>
                    {type}. {size}cm.
                </div>
            </div>

            <div className={styles.price}>{price} $</div>
        </div>
    );
};

export default HistoryCard;
