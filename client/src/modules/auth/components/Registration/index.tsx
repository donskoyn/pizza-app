import React from 'react'
import RegistrationFormWithFormik from '../RegistrationForm'
import WrapperForm from '../UI/WrapperForm'



interface registrationProps {
    changeFlag: () => void
}

const Registration: React.FC<registrationProps> = ({ changeFlag }) => {
    return (
        <WrapperForm>
            <RegistrationFormWithFormik changeFlag={changeFlag} />
        </WrapperForm>
    )
}

export default Registration