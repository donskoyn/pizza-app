import { AxiosConfig } from '../../common/http';
import { userDataTypes } from '../constants';

import { authDataIntrface } from '../interfaces';
import { changeIsAuth, LogOutUser } from '../redux/actions/userData';

export const login = async (authData: authDataIntrface, dispatch: ({}) => void) => {
    const axios = AxiosConfig(dispatch);

    const { data } = await axios.post('/login', authData, {
        withCredentials: true,
    });

    return data;
};

export const registration = async (registrationData: authDataIntrface, dispatch: ({}) => void) => {
    const axios = AxiosConfig(dispatch);
    const { data } = await axios.post('/registration', registrationData);

    return data;
};
export const refreshToken = async (dispatch: ({}) => void) => {
    const axios = AxiosConfig(dispatch);
    const { data } = await axios.get('/refresh');
    return data;
};

export const getUserData = async (emailUser: string, dispatch: ({}) => void) => {
    const axios = AxiosConfig(dispatch);
    const { data } = await axios.post('/user', { email: emailUser });
    return data;
};

export const logOut = async (dispatch: ({}) => void) => {
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: false,
    });

    localStorage.removeItem('token');
    const axios = AxiosConfig(dispatch);
    await axios.post('/logout');
    dispatch(changeIsAuth(false));
    dispatch(LogOutUser());

    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: true,
    });
};
