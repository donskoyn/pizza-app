import { withFormik } from 'formik'
import React from 'react'
import * as yup from 'yup';
import FormField from '../FormField';
import AuthButtonsPanel from '../UI/AuthButtonsPanel/AuthButtonsPanel';
import InputMail from '../UI/InputMail/InputMail';
import WrapperPassword from '../UI/WrapperPassword/WrapperPassword';
import styles from './RegistrationForm.module.scss'

const RegistrationForm = ({
    changeFlag,
    dispatch,
    handleSubmit,
    values,
    touched,
    errors,
    isSubmitting,
    setFieldTouched,
    setFieldValue
    // FormikProps<LoginFormInterface>
}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            <FormField title='Write you Email' required={true} errorMessage={touched.email && errors.email}>
                <InputMail isSubmitting={isSubmitting} values={values.email} setFieldTouched={setFieldTouched} setFieldValue={setFieldValue} />
            </FormField>
            <FormField title='Write Password' required={true} errorMessage={touched.password && errors.password}>
                <WrapperPassword>
                    <input
                        type="password"
                        className={styles.inputAuth}
                        disabled={isSubmitting}
                        value={values.password}
                        onBlur={() => setFieldTouched('password')}
                        onChange={(event) => setFieldValue('password', event.target.value)}
                    />
                </WrapperPassword>
            </FormField>
            <FormField title='Confirmation Password' required={true} errorMessage={touched.passwordConfirmation && errors.passwordConfirmation}>
                <WrapperPassword>
                    <input
                        type="password"
                        className={styles.inputAuth}
                        disabled={isSubmitting}
                        value={values.passwordConfirmation}
                        onBlur={() => setFieldTouched('passwordConfirmation')}
                        onChange={(event) => setFieldValue('passwordConfirmation', event.target.value)}
                    />
                </WrapperPassword>
            </FormField>
            <AuthButtonsPanel changeFlag={changeFlag} submitTitle='Registration' changeFormTitle='To Login' />
        </form>
    )
}


const RegistrationFormWithFormik = withFormik<any, any>({
    mapPropsToValues: () => {
        return { email: '', password: '', passwordConfirmation: '' }
    },
    handleSubmit: async (userAuth, { props }) => {
        console.log(userAuth)
    },
    validationSchema: yup.object().shape({
        email: yup.string().email('Must be a valid email !').max(255).required('Email is not empty !'),
        password: yup.string().max(20).required('Password is required !'),
        passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Password must match').required('Password is required !'),
    }),
    displayName: "RegistrationForm",
})(RegistrationForm)


export default RegistrationFormWithFormik
