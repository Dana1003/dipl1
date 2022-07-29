import $api from '../http';
import { ROUTS_API } from "../routs";

import { notification } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import axios from "axios";

function errorNotification() {
    notification.open({
        message: 'Что-то пошло не так!',
        icon: <CloseCircleOutlined style={{color: "red"}}/>
    });
}

const AuthService = {
    postUser(login, password, navigate) {
        return $api.post(ROUTS_API.registration, {
            "login": login,
            "password": password,
            "role": "User"
        })
            .then(response => {
                localStorage.setItem("token", response.data.access_token)
                return navigate('/userMainPage')
            })
            .catch(error => {
                console.log(error.message)
                errorNotification()
            })
    },
    postLogIn(login, password, navigate) {
        return axios.post(ROUTS_API.authorization, {
            "login": login,
            "password": password,
        })
            .then(response => {
                localStorage.setItem("token", response.data.access_token)
                if(response.data.role === 'User') {
                    return navigate('/userMainPage')
                }
                if(response.data.role === 'Admin') {
                    return navigate('/adminMainPage')
                }
                if(response.data.role === 'Manager') {
                    return navigate('/managerMainPage')
                }
            })
            .catch(error => {
                console.log(error.message)
                errorNotification()
            })
    }
}

export default  AuthService;