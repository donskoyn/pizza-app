import React from 'react';
import { arrayOrderInterface, layoutHistoryInterface } from '../../interfaces';
import HistoryCard from '../HistoryCard';
import styles from './HistoryOptions.module.scss';
import moment from 'moment';

interface dataHistory {
  data: layoutHistoryInterface
}

const HistoryOptions: React.FC<dataHistory> = ({ data }): JSX.Element => {

  return (
    <div className={styles.wrapper}>

      <div className={styles.date}><span>Order date : </span><h3> {moment(data.date).format('DD/MM/YYYY - h:mm')}</h3></div>
      <div className={styles.historyCard}>

        {data?.cart.map((order: arrayOrderInterface, index: number) => {
          return <HistoryCard size={order.size} imageUrl={order.imageUrl} type={order.type} name={order.name} price={order.price} key={index} />
        })}
      </div>
      <div className={styles.total}><span>TOTAL PRICE : </span><span>{data?.cart.map((item: arrayOrderInterface) => item.price).reduce((prev: number, curr: number) => prev + curr, 0)} $</span></div>
    </div>
  )
}

export default HistoryOptions