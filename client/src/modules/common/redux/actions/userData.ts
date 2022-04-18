import { userDataTypes } from "../../constants";
import { authDataIntrface } from "../../interfaces";
import { login, refreshToken, registration, getUserData } from "../../tools/authOptions";







export const LoginUser = (authData: authDataIntrface) => async (dispatch: Function) => {

    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: false
    });

    try {
        const data = await login(authData, dispatch);
        console.log(data)
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


export const registrationUser = (registrationData: authDataIntrface) => async (dispatch: Function) => {
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: false
    });
    try {
        const data = await registration(registrationData, dispatch)
        console.log(data);
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
        const data = await refreshToken(dispatch);
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

export const setCartUser = (emailUser: string) => async (dispatch: Function) => {
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: false
    });
    try {
        const data = await getUserData(emailUser, dispatch);
        console.log(data)
        dispatch({
            type: userDataTypes.REFRESH_USER,
            payload: data
        });


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