import React, { useCallback, useState } from 'react'
import styles from './Auth.module.scss'
import imgBg from '../../../common/assets/img/pizzaBg.png'
import InputMail from '../UI/InputMail/InputMail'
import InputPassword from '../UI/InputPassword/InputPassword'

interface authProps {
    changeFlag: () => void
}
const Auth: React.FC<authProps> = ({ changeFlag }) => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const changeEmail = useCallback((value: string): void => {
        setMail(value)
    }, [])
    const changePassword = useCallback((value: string) => {
        setPassword(value)
    }, [])

    return (
        <div className={styles.wrapper}>
            <img src={imgBg} alt="pizza background" className={styles.img} />
            <div className={styles.wraperForm}>
                <InputMail changeEmail={changeEmail} />
                <InputPassword changePassword={changePassword} />
                <div className={styles.authButtons}>
                    <div className={styles.button}>Login</div>
                    <div className={styles.button} onClick={() => changeFlag()}>Registration</div>
                </div>
            </div>
        </div>
    )
}

export default Auth