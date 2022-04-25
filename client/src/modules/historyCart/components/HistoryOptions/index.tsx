import React from 'react';
import { arrayOrderInterface, layoutHistoryInterface } from '../../interfaces';
import HistoryCard from '../HistoryCard';
import styles from './HistoryOptions.module.scss';
import moment from 'moment';

const HistoryOptions: React.FC<layoutHistoryInterface> = ({ date, arrayOrder }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.date}><span>Order date : </span><h3> {moment(date).format('DD/MM/YYYY - h:mm')}</h3></div>
      {arrayOrder.map((order: arrayOrderInterface, index: number) => {
        return <HistoryCard size={order.size} imageUrl={order.imageUrl} type={order.type} name={order.name} price={order.price} key={index} />
      })}
      <div className={styles.total}><span>TOTAL PRICE : </span><span>{arrayOrder.map((item: arrayOrderInterface) => item.price).reduce((prev: number, curr: number) => prev + curr, 0)} $</span></div>
    </div>
  )
}

export default HistoryOptions