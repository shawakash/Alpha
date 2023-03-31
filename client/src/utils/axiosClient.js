import axios from 'axios';    // hepls to connect with the backend api
import { getItem, KEY_ACCESS_TOKEN, removeItem, setItem } from './localStorageManager';
const baseURL = process.env.REACT_APP_SERVER_BASE_URL;
export const axiosClient = axios.create({
    baseURL: `${baseURL}`,
    withCredentials: true,             // this doesn't sends cookie from frontend to backend;
});

axiosClient.interceptors.request.use(                       // automatically sends the access token to all api for authentication
    (request) => {
        const accessToken = getItem(KEY_ACCESS_TOKEN);
        request.headers['Authorization'] = `Bearer ${accessToken}`;
        // here is how you pass accesstoken
        return request;
    },
    // (error) => {}
);


axiosClient.interceptors.response.use(                  // implemented after the accessToken is sent
    async (response) => {
        const data = response.data;
        const originalRequest = response.config;
        const statusCode = data.statusCode;
        const error = data.error;

        if (data.status == 'success') { 
            console.log('Data', data);            // if accessToken is fine move forward
            return data;
        }
        if ( // if accessToken as well as refresh token is expired then we logout the user
            statusCode == 401 &&
            originalRequest.url == `${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`
        ) {
            removeItem(KEY_ACCESS_TOKEN);
            window.location.replace('/login', '_self');
            return Promise.reject(error);
        }
        if (statusCode == 401 && !originalRequest._retry) {  // if accessToken is expired but not the refresh token we call refresh api

            originalRequest._retry = true;
            const response = await axios.create({
                withCredentials: true
            }).get(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`)
            console.log("response" ,response);//////
            
            if (response.status == 'success') {  // to handle the expiration of refreshToken
                setItem(KEY_ACCESS_TOKEN, response.result.accessToken);  // setting newAccessToken
                originalRequest.headers['Authorization'] = `Bearer ${response.result.accessToken}`; // sending newAccessToken to the initialy called api
                return axios(originalRequest);
            }

        }
        return Promise.reject(error);
    }, async (error) => {
        try {
            const originalRequest = error.config;
            const responseByRefresh = await axios
            .create({
                withCredentials: true,
            })
            .get(`${baseURL}/auth/refresh`);
            console.log('err', responseByRefresh)
            if (responseByRefresh.status == 'success') {  // to handle the expiration of refreshToken
                setItem(KEY_ACCESS_TOKEN, responseByRefresh.result);  // setting newAccessToken
                originalRequest.headers['Authorization'] = `Bearer ${responseByRefresh.result}`; // sending newAccessToken to the initialy called api
                return axios(originalRequest);
            }
        } catch (error) {

        }

        return Promise.reject(error);
    }                     // no error as backend doesn't error it sents error in success
);

