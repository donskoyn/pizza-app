import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import LoginFormWithFormik from '../components/LoginForm';
import RegistrationFormWithFormik from '../components/RegistrationForm';
import WrapperForm from '../components/UI/WrapperForm';

const Autorizathion = () => {
    const [authFlag, setAuthFlag] = useState(true);
    const dispatch = useDispatch()

    const handlerChangeFlag = () => {
        const flag = !authFlag;
        setAuthFlag(flag)
    }
    return (
        <div>
            {authFlag
                ?
                <WrapperForm>
                    <LoginFormWithFormik dispatch={dispatch} changeFlag={handlerChangeFlag} />
                </WrapperForm>
                :
                <WrapperForm>
                    <RegistrationFormWithFormik dispatch={dispatch} changeFlag={handlerChangeFlag} />
                </WrapperForm>
            }

        </div>
    )
}

export default Autorizathion