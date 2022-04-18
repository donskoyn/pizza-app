import { ErrorMessage, FormikProps, withFormik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { RootState } from '../../../app/store';

import { LoginUser } from '../../../common/redux/actions/userData';

import FormField from '../FormField';
import ChangeFormBtn from '../UI/ChangeFormBtn/ChangeFormBtn';

import InputMail from '../UI/InputMail/InputMail';
import SubmitBtn from '../UI/SubmitBtn/SubmitBtn';
import WrapperPassword from '../UI/WrapperPassword/WrapperPassword';
import styles from './FormLogin.module.scss'

interface LoginFormInterface {
  email: string,
  password: string,
  changeFlag: () => void,
  dispatch: () => void
}

const LoginForm = ({
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
  const erorMessage = useSelector(({ userData }: RootState) => userData.error)
  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <ChangeFormBtn changeFlag={changeFlag} title="Sign up →" />
      <FormField title='Write you Email' required={true} errorMessage={touched.email && errors.email}>
        <InputMail isSubmitting={isSubmitting} values={values.email} setFieldTouched={setFieldTouched} setFieldValue={setFieldValue} />
      </FormField>
      <FormField title='Write Password' required={true} errorMessage={touched.password && errors.password}>
        <WrapperPassword>
          <input
            type='password'
            className={styles.inputAuth}
            disabled={isSubmitting}
            value={values.password}
            onBlur={() => setFieldTouched('password')}
            onChange={(event) => setFieldValue('password', event.target.value)}
          />
        </WrapperPassword>
      </FormField>
      <div className={styles.error}>{erorMessage}</div>
      <SubmitBtn title='login' />
    </form>
  )
}



const LoginFormWithFormik = withFormik<any, any>({
  mapPropsToValues: () => {
    return { email: '', password: '' }
  },
  handleSubmit: async (userAuth, { props }) => {
    props.dispatch(LoginUser(userAuth))
  },
  validationSchema: yup.object().shape({
    email: yup.string().email('Must be a valid email !').max(255).required('Email is not empty !'),
    password: yup.string().max(20).required('Password is required !'),
  }),
  displayName: "LoginForm",
})(LoginForm)


export default LoginFormWithFormik



