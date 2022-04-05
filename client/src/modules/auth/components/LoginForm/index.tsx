import { ErrorMessage, FormikProps, withFormik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { RootState } from '../../../app/store';

import { addUser } from '../../../common/redux/actions/userData';

import FormField from '../FormField';
import AuthButtonsPanel from '../UI/AuthButtonsPanel/AuthButtonsPanel';
import InputMail from '../UI/InputMail/InputMail';
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
    <form onSubmit={handleSubmit}>
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
      <AuthButtonsPanel changeFlag={changeFlag} submitTitle='Login ' changeFormTitle='to sign up' />
    </form>
  )
}



const LoginFormWithFormik = withFormik<any, any>({
  mapPropsToValues: () => {
    return { email: '', password: '' }
  },
  handleSubmit: async (userAuth, { props }) => {
    props.dispatch(addUser(userAuth))
  },
  validationSchema: yup.object().shape({
    email: yup.string().email('Must be a valid email !').max(255).required('Email is not empty !'),
    password: yup.string().max(20).required('Password is required !'),
  }),
  displayName: "LoginForm",
})(LoginForm)


export default LoginFormWithFormik



/*
const authAxios = (dispatch: Dispatch) => {
  const authData: AuthData = JSON.parse(
    localStorage.getItem("authData") as string
  );

  const instanceAxios = axios.create({
    baseURL: settings.baseURL,
    headers: {
      Authorization: authData ? `Bearer ${authData.token}` : "",
    },
  });

  instanceAxios.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError) => {
      const status = error.response?.status || 500;

      switch (status) {
        case 401: {
          localStorageUtil.removeStorageItem("authData");
          dispatch(authSlice.actions.setIsAuth(false));
          return Promise.reject(error.response);
        }
        case 422: {
          return Promise.reject(error.response);
        }
      }
    }
  );

  return instanceAxios;
};
*/