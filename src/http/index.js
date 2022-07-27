import axios from 'axios';
import { API_URL } from "../routs";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
    }
});

export default $api;