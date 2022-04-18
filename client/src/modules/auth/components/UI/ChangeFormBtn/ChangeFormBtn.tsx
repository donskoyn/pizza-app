import React from 'react'
import styles from './ChangeFormBtn.module.scss'

interface ChangeFormBtnInterface {
    title: string,
    changeFlag: () => void
}

const ChangeFormBtn: React.FC<ChangeFormBtnInterface> = ({ changeFlag, title }): JSX.Element => {
    return (
        <button onClick={() => changeFlag()} className={styles.changeForm}>{title}</button>
    )
}

export default ChangeFormBtn