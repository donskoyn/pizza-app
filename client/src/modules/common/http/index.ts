import axios, { AxiosError } from 'axios';
import { addPizzasCart } from '../../cart/redux/actions/cartPizzas';
import { BASE_URL } from '../constants';
import { setUserData, updatesTokens } from '../redux/actions/userData';

export const AxiosConfig = (dispatch: any) => {
    const instanceAxios = axios.create({
        baseURL: BASE_URL,
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    instanceAxios.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
            const origReq = error.config;
            const status = error.response?.status || 500;
            switch (status) {
                case 401: {
                    localStorage.removeItem('token');
                    dispatch(updatesTokens()).then(() => {
                        dispatch(addPizzasCart([]));
                        if (origReq.headers)
                            origReq.headers['Authorization'] =
                                'Bearer ' + localStorage.getItem('token');
                        axios(origReq).then((res) => {
                            dispatch(setUserData(res));
                        });
                    });

                    return Promise.reject(error.config);
                }
                case 422: {
                    return Promise.reject(error.response);
                }
            }
        },
    );

    return instanceAxios;
};
