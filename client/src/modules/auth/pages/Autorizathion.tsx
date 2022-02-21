import React, { useState } from 'react'
import Auth from '../components/Auth'
import Registration from '../components/Registration'

const Autorizathion = () => {
    const [authFlag, setAuthFlag] = useState(true);

    const handlerChangeFlag = () => {
        console.log('auth')
        const flag = !authFlag;
        setAuthFlag(flag)
    }
    return (
        <div>
            {authFlag ? <Auth changeFlag={handlerChangeFlag} /> : <Registration changeFlag={handlerChangeFlag} />}

        </div>
    )
}

export default Autorizathion