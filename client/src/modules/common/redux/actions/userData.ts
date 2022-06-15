import { userDataTypes } from '../../constants';
import { authDataIntrface } from '../../interfaces';
import { login, refreshToken, registration, getUserData } from '../../tools/authOptions';

export const LogOutUser = () => (dispatch: ({}) => void) => {
    dispatch({
        type: userDataTypes.SET_USER,
        payload: [],
    });
};

export const LoginUser = (authData: authDataIntrface) => async (dispatch: ({}) => void) => {
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: false,
    });
    try {
        const data = await login(authData, dispatch);
        dispatch({
            type: userDataTypes.SET_USER,
            payload: data.user,
        });
        localStorage.setItem('token', data.accessToken);
        dispatch({
            type: userDataTypes.ERROR_MESSAGE,
            payload: '',
        });
        dispatch({
            type: userDataTypes.AUTHORIZETED,
            payload: true,
        });
    } catch (err) {
        dispatch({
            type: userDataTypes.ERROR_MESSAGE,
            payload: { type: 'login', message: 'Invalid user or password' },
        });
    }
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: true,
    });
};

export const registrationUser =
    (registrationData: authDataIntrface) => async (dispatch: ({}) => void) => {
        dispatch({
            type: userDataTypes.SET_LOADED_USER,
            payload: false,
        });
        try {
            const data = await registration(registrationData, dispatch);

            dispatch({
                type: userDataTypes.SET_USER,
                payload: data.user,
            });
            localStorage.setItem('token', data.accessToken);
            dispatch({
                type: userDataTypes.ERROR_MESSAGE,
                payload: '',
            });
            dispatch({
                type: userDataTypes.AUTHORIZETED,
                payload: true,
            });
        } catch (err) {
            dispatch({
                type: userDataTypes.ERROR_MESSAGE,
                payload: { type: 'reg', message: 'Invalid mail or password' },
            });
        }
        dispatch({
            type: userDataTypes.SET_LOADED_USER,
            payload: true,
        });
    };

export const refreshUser = () => async (dispatch: ({}) => void) => {
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: false,
    });
    try {
        const data = await refreshToken(dispatch);
        dispatch({
            type: userDataTypes.REFRESH_USER,
            payload: data.user,
        });
        localStorage.setItem('token', data.accessToken);
        dispatch({
            type: userDataTypes.AUTHORIZETED,
            payload: true,
        });
    } catch (err) {
        console.log(err);
    }
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: true,
    });
};

export const setCartUser = (emailUser: string) => async (dispatch: ({}) => void) => {
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: false,
    });
    try {
        const data = await getUserData(emailUser, dispatch);

        dispatch({
            type: userDataTypes.REFRESH_USER,
            payload: data,
        });

        dispatch({
            type: userDataTypes.AUTHORIZETED,
            payload: true,
        });
    } catch (err) {
        console.log(err);
    }
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: true,
    });
};

export const updatesTokens = () => async (dispatch: ({}) => void) => {
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: false,
    });
    try {
        const data = await refreshToken(dispatch);
        dispatch({
            type: userDataTypes.REFRESH_USER,
            payload: data.user,
        });
        localStorage.setItem('token', data.accessToken);
    } catch (err) {
        console.log(err);
    }
    dispatch({
        type: userDataTypes.SET_LOADED_USER,
        payload: true,
    });
};
export const setUserData = (res: any) => (dispatch: ({}) => void) => {
    dispatch({
        type: userDataTypes.SET_USER,
        payload: res.data,
    });
};

export const changeIsAuth = (type: boolean) => ({
    type: userDataTypes.AUTHORIZETED,
    payload: type,
});
