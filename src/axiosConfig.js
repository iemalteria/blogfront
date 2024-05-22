import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    config => {
        const allowedOrigins = ['https://iemalteria-back.vercel.app/post', "http://localhost:3000/"];
        const origin = new URL(config.url).origin;
        if (allowedOrigins.includes(origin)) {
            config.headers['Access-Control-Allow-Origin'] = '*';
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;