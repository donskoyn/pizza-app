import { userDataTypes } from "../../constants"

interface userDataInterface {
    user: {},
    loaded: boolean | any,
    isAuth: boolean | any,
    error: string | any,
}

const initialState: userDataInterface = {
    user: {},
    loaded: false,
    isAuth: false,
    error: ''

}

interface actionUserData {
    type: string,
    payload: userDataInterface
}

const userDataReducer = (
    state = initialState,
    action: actionUserData
): userDataInterface => {
    switch (action.type) {
        case userDataTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case userDataTypes.SET_LOADED_USER:
            return {
                ...state,
                loaded: action.payload
            }
        case userDataTypes.ERROR_MESSAGE:
            return {
                ...state,
                error: action.payload
            }
        case userDataTypes.REFRESH_USER:
            return {
                ...state,
                user: action.payload
            }
        case userDataTypes.AUTHORIZETED:
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state;
    }
}

export default userDataReducer