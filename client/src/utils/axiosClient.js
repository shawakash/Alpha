import axios from "axios";
import {
    getItem,
    KEY_ACCESS_TOKEN,
    removeItem,
    setItem,
} from "./localStorageManager";
import store from '../redux/store';
import { setLoading, setToast } from "../redux/slices/appConfigSlice";
import { TOAST_ERROR, TOAST_SUCCESS } from "../App";

let baseURL = 'http://localhost:3000';
console.log('env is ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    baseURL = process.env.REACT_APP_SERVER_BASE_URL
}



export const axiosClient = axios.create({
    baseURL,
    withCredentials: true,
});

axiosClient.interceptors.request.use((request) => {
    const accessToken = getItem(KEY_ACCESS_TOKEN);
    request.headers["Authorization"] = `Bearer ${accessToken}`;
    store.dispatch(setLoading(true));
    return request;
});

axiosClient.interceptors.response.use(async (response) => {
    store.dispatch(setLoading(false));
    const data = response.data;
    
    if (data.status === "success") {
        
        return data;
    }

    const originalRequest = response.config;
    const statusCode = data.statusCode;
    const error = data.message;

    store.dispatch(setToast({
        type: TOAST_ERROR,
        message: error
    }))

    if (statusCode === 401 && !originalRequest._retry) {
        // means the access token has expired
        originalRequest._retry = true;

        const response = await axios
            .create({
                withCredentials: true,
            })
            .get(`${baseURL}/auth/refresh`);

        if (response.data.status === "success") {
            setItem(KEY_ACCESS_TOKEN, response.data.result.accessToken);
            originalRequest.headers[
                "Authorization"
            ] = `Bearer ${response.data.result.accessToken}`;

            return axios(originalRequest);
        } else {
            removeItem(KEY_ACCESS_TOKEN);
            window.location.replace("/login", "_self");
            return Promise.reject(error);
        }
    }
    return Promise.reject(error);
}, async (error) => {
    console.log('From Axios')
    store.dispatch(setLoading(false));
    store.dispatch(setToast({
        type: TOAST_ERROR,
        message: error.response.data.message
    }));
    return Promise.reject(error);
});