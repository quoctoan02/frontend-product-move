import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    // withCredentials: true
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('accessToken');
        config.headers.Authorization = token ? token : '';
        return config;
    },
    error => {
        Promise.reject(error);
    }
);
instance.interceptors.response.use(
    (response) => {
        return response.data;
    })

export default instance;
