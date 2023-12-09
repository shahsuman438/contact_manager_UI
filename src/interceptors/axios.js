import axios from "axios";
import { toast } from 'react-toastify';
const baseURL = process.env.REACT_APP_API_URL;


const authAxios = axios.create(
    {
        baseURL: baseURL,

    }
)
authAxios.interceptors.request.use(
    config => {
        if (localStorage.getItem('AccessToken')) {
            config.headers["Authorization"] = `Bearer ${localStorage.getItem('AccessToken')}`
        }
        return config
    },
    error => {
        return Promise.reject(error);
    }
)


authAxios.interceptors.response.use(
    response => {
        return response
    },
    async (error) => {
        const originalConfig = error.config;
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error)
            });
        }
        if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            localStorage.removeItem("AccessToken")
            try {
                const result = await authAxios.post("/auth/refreshToken", {}, { withCredentials: true });
                const { AccessToken } = result.data;
                localStorage.setItem("AccessToken", AccessToken)
                return authAxios(originalConfig);
            } catch (_error) {
                return Promise.reject(_error);
            }

        }
        if (error.response.status === 403) {
            localStorage.removeItem("AccessToken")
            toast.error("Session Expired Please Re-Login")
        }
        return Promise.reject(error);
    }
);



export default authAxios