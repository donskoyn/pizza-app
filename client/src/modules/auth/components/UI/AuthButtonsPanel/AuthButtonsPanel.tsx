import React from 'react'
import styles from './AuthButtonsPanel.module.scss'

interface AuthButtonsPanelInterface {
    submitTitle: string,
    changeFormTitle: string,
    changeFlag: () => void
}

const AuthButtonsPanel: React.FC<AuthButtonsPanelInterface> = ({ changeFlag, submitTitle, changeFormTitle }): JSX.Element => {
    return (
        <div className={styles.authButtons}>
            <button type='submit' className={styles.button} >{submitTitle}</button>
            <button onClick={() => changeFlag()} className={styles.button}>{changeFormTitle}</button>
        </div>
    )
}

export default AuthButtonsPanel