import axios from 'axios';
import { API_URL } from "../routs";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
});

$api.interceptors.request.use( (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export default $api;