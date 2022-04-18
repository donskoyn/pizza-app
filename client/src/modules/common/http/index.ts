import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../constants';
import { refreshUser } from '../redux/actions/userData';




export const AxiosConfig = (dispatch: Function) => {
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
            const status = error.response?.status || 500;

            switch (status) {
                case 401: {
                    localStorage.removeItem("token");
                    dispatch(refreshUser());
                    return Promise.reject(error.response);
                }
                case 422: {
                    return Promise.reject(error.response);
                }
            }
        }
    );

    return instanceAxios
};

