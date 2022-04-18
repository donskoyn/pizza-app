import { AxiosConfig } from "../../common/http";
import { BASE_URL } from "../constants";
import { authDataIntrface } from "../interfaces";
import { changeIsAuth } from "../redux/actions/userData";

//nas@ma.rs

export const login = async (authData: authDataIntrface, dispatch: Function) => {



    const axios = AxiosConfig(dispatch)

    const { data } = await axios.post('/login', authData, {
        withCredentials: true
    })


    return data
}

export const registration = async (registrationData: authDataIntrface, dispatch: Function) => {

    const axios = AxiosConfig(dispatch);
    const { data } = await axios.post('/registration', registrationData)

    return data;
}
export const refreshToken = async (dispatch: Function) => {
    const axios = AxiosConfig(dispatch);
    const { data } = await axios.get('/refresh')
    return data;
}

export const getUserData = async (emailUser: string, dispatch: Function) => {

    const axios = AxiosConfig(dispatch);
    const { data } = await axios.post('/user', { email: emailUser })
    console.log(data)
    return data;
}

export const logOut = async (dispatch: Function) => {
    localStorage.removeItem('token');
    const axios = AxiosConfig(dispatch);
    await axios.post('/logout')
    dispatch(changeIsAuth(false))
}

