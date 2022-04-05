import axios, { AxiosRequestConfig } from 'axios';

export const AuthAxios = (options: AxiosRequestConfig) => {
    return axios({
        method: options.method,
        url: options.url,
        data: options.data,
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

};

