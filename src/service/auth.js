import $api from '../http';
import { ROUTS_API } from "../routs";
import axios from "axios";
import notifications from '../notifications/notifications';

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
                notifications.errorNotification('Данные не были добавлены! Что-то пошло не так!')
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
                notifications.errorNotification(error.message)
            })
    }
}

export default  AuthService;