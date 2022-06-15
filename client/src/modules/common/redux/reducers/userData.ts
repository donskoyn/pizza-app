import { layoutHistoryInterface } from '../../../historyCart/interfaces';
import { userDataTypes } from '../../constants';

interface errorMessage {
    type: string;
    message: string;
}

interface userInterface {
    email: string;
    id: '';
    cart: layoutHistoryInterface[];
    isActivated?: boolean;
}

interface userDataInterface {
    user: userInterface;
    loaded: boolean;
    isAuth: boolean;
    error: errorMessage;
}
const initialState: userDataInterface = {
    user: {
        email: '',
        id: '',
        cart: [],
        isActivated: false,
    },
    loaded: false,
    isAuth: false,
    error: { type: '', message: '' },
};
const userDataReducer = (state = initialState, action: any): userDataInterface => {
    switch (action.type) {
        case userDataTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case userDataTypes.SET_LOADED_USER:
            return {
                ...state,
                loaded: action.payload,
            };
        case userDataTypes.ERROR_MESSAGE:
            return {
                ...state,
                error: action.payload,
            };
        case userDataTypes.REFRESH_USER:
            return {
                ...state,
                user: action.payload,
            };
        case userDataTypes.AUTHORIZETED:
            return {
                ...state,
                isAuth: action.payload,
            };
        default:
            return state;
    }
};
export default userDataReducer;
