
import { userDataTypes } from "../../constants"
import { ActionStateRefresh, ActionStateSet, ActionStateError, ActionAuth, ActionStateLoaded } from "../../interfaces"



interface userInterface {
    email: string,
    id?: '',
    cart?: [],
    isActivated?: boolean
}

type InitialAction = ActionStateLoaded | ActionStateRefresh | ActionStateSet | ActionStateError | ActionAuth

interface userDataInterface {
    user: userInterface,
    loaded?: boolean,
    isAuth?: boolean,
    error?: string,
}

const initialState: userDataInterface = {
    user: {
        email: '',
        id: '',
        cart: [],
        isActivated: false
    },
    loaded: false,
    isAuth: false,
    error: ''
}

const userDataReducer = (
    state = initialState,
    action: InitialAction
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