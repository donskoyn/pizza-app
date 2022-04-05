import React, { ReactNode } from 'react'
import imgBg from '../../../../common/assets/img/pizzaBg.png'
import styles from './WrapperForm.module.scss'


interface WrapperFormInterface {
  children: ReactNode
}

const WrapperForm: React.FC<WrapperFormInterface> = ({ children }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <img src={imgBg} alt="pizza background" className={styles.img} />
      <div className={styles.wraperForm}>
        {children}
      </div>
    </div>
  )
}

export default WrapperForm