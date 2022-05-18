import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import RegistrationFormWithFormik from '../components/RegistrationForm';
import WrapperForm from '../components/UI/WrapperForm';

const Registration: React.FC = (): JSX.Element => {
    const dispatch = useDispatch()

    return (
        <div>
            <WrapperForm>
                <RegistrationFormWithFormik dispatch={dispatch} />
            </WrapperForm>
        </div>
    )
}

export default Registration