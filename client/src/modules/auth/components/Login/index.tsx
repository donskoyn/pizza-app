import React from 'react'
import LoginFormWithFormik from '../LoginForm'
import { useDispatch } from 'react-redux'

import WrapperForm from '../UI/WrapperForm'

interface loginInterface {
    changeFlag: () => void
}
const Login: React.FC<loginInterface> = ({ changeFlag }) => {
    const dispatch = useDispatch();


    return (
        <WrapperForm>
            <LoginFormWithFormik dispatch={dispatch} changeFlag={changeFlag} />
        </WrapperForm>
    )
}

export default Login