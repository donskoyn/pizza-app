import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ChangeFormBtn.module.scss'

interface ChangeFormBtnInterface {
    title: string,
    toLink: string
}

const ChangeFormBtn: React.FC<ChangeFormBtnInterface> = ({ toLink, title }): JSX.Element => {
    return (
        <Link to={toLink} className={styles.changeForm}>{title}</Link>
    )
}

export default ChangeFormBtn