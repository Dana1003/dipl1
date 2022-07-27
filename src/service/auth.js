import $api from '../http';
import { ROUTS_API } from "../routs";

import { notification } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

function errorNotification() {
    notification.open({
        message: 'Что-то пошло не так!',
        icon: <CloseCircleOutlined style={{color: "red"}}/>
    });
}

const AuthService = {
    postUser(login, password, navigate) {
        return $api.post(ROUTS_API.users, {
            "login": login,
            "password": password,
            "role": "User"
        })
            .then(response => {
                return navigate('/userMainPage');
            })
            .catch(error => {
                if (error.response.status === 500 || error.response.status === 400) {
                    console.log(error.message)
                    errorNotification()
                }
            })
    }
}

export default  AuthService;