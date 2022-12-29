import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    // withCredentials: true
});

instance.interceptors.request.use(
    config => {
        // Do something before request is sent
        // let authToken =
        config.headers["Authorization"] = localStorage.getItem("accessToken");
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
