import React from 'react'
import styles from './Registration.module.scss'
import imgBg from '../../../common/assets/img/pizzaBg.png'



interface registrationProps {
    changeFlag: () => void
}

const Registration: React.FC<registrationProps> = ({ changeFlag }) => {
    return (
        <div className={styles.wrapper}>
            <img src={imgBg} alt="pizza background" className={styles.img} />
            <div className={styles.wraperForm}>

                <div className={styles.authButtons}>
                    <div className={styles.button} onClick={() => changeFlag()}>Registration</div>
                </div>
            </div>
        </div>
    )
}

export default Registration