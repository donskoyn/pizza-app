import React from 'react'
import { useSelector } from 'react-redux'
import HistoryOptions from '../HistoryOptions'
import styles from './LayoutHistory.module.scss'

interface historyOrderInterface {
    cart: [],
    date: string
}



const LayoutHistory: React.FC = (): JSX.Element => {
    const userDataCart = useSelector(({ userData }: any) => userData)
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>History Orders</h1>
            <div className={styles.content}>
                {
                    userDataCart.user.cart.map((historyOrder: historyOrderInterface, index: number) => {
                        return <HistoryOptions key={`${historyOrder.date}${index}`} arrayOrder={historyOrder.cart} date={historyOrder.date} />
                    })
                }
            </div>
        </div>

    )
}

export default LayoutHistory

