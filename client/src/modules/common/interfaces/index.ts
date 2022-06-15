import { userDataTypes } from '../constants';

export interface Pizzas {
    _id: string;
    imageUrl: string;
    name: string;
    types: string[];
    sizes: number[];
    price: number;
    category?: string;
    rating: number;
    liked: string[];
}

export interface CartObjNew {
    _id: string;
    imageUrl: string;
    name: string;
    price: number;
    type: string;
    size: number;
    count: number;
}
export interface CartObjNewWithIndex extends CartObjNew {
    index: number;
}

export interface authDataIntrface {
    email: string;
    password: string;
}

///redux userDataActions

export interface ActionStateLoaded {
    type: userDataTypes.SET_LOADED_USER;
    payload: boolean;
}

export interface ActionStateRefresh {
    type: userDataTypes.REFRESH_USER;
    payload: { email: string };
}
export interface ActionStateSet {
    type: userDataTypes.SET_USER;
    payload: { email: string };
}

export interface ActionStateError {
    type: userDataTypes.ERROR_MESSAGE;
    payload: string;
}

export interface ActionAuth {
    type: userDataTypes.AUTHORIZETED;
    payload: boolean;
}
