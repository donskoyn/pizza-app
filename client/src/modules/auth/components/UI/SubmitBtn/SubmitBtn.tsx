import React from 'react'
import styles from './SubmitBtn.module.scss'


interface SubmitBtnInterface {
    title: string
}

const SubmitBtn: React.FC<SubmitBtnInterface> = ({ title }): JSX.Element => {
    return (
        <button className={styles.sumbitBtn} type='submit'>{title}</button>
    )
}

export default SubmitBtn