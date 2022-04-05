import { userDataTypes } from "../../constants";
import { authDataIntrface } from "../../interfaces";
import { login, refreshToken } from "../../tools/authOptions";





export const addUser = (authData: authDataIntrface) => async (dispatch: Function) => {

    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: false
    });
    try {
        const data = await login(authData);
        dispatch({
            type: userDataTypes.SET_USER,
            payload: data.user
        });
        localStorage.setItem('token', data.accessToken);
        dispatch({
            type: userDataTypes.ERROR_MESSAGE,
            payload: ''
        })
        dispatch({
            type: userDataTypes.AUTHORIZETED,
            payload: true
        })
    } catch (err) {
        dispatch({
            type: userDataTypes.ERROR_MESSAGE,
            payload: 'Invalid user or password'
        })
    }
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: true
    });
}



export const refreshUser = () => async (dispatch: Function) => {
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: false
    });
    try {
        const data = await refreshToken();
        dispatch({
            type: userDataTypes.REFRESH_USER,
            payload: data.user
        });
        localStorage.setItem('token', data.accessToken);
        dispatch({
            type: userDataTypes.AUTHORIZETED,
            payload: true
        })

    } catch (err) {
        console.log(err)
    }
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: true
    });
}



export const changeIsAuth = (type: boolean) => ({
    type: userDataTypes.AUTHORIZETED,
    payload: type
})