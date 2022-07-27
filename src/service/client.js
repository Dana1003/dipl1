import $api from '../http';
import {ROUTS_API} from "../routs";

import {notification} from "antd";
import {CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined} from "@ant-design/icons";
import moment from "moment";

function successDeleteNotification() {
    notification.open({
        message: 'Данные успешно удалены!',
        icon: <DeleteOutlined style={{color: "green"}}/>
    })
}

function successAddNotification() {
    notification.open({
        message: 'Данные успешно добавлены!',
        icon: <CheckCircleOutlined style={{color: "green"}}/>
    })
}

function errorNotification() {
    notification.open({
        message: 'Что-то пошло не так!',
        icon: <CloseCircleOutlined style={{color: "red"}}/>
    });
}

const ClientService = {
    getClient(setClient) {
        return $api.get(ROUTS_API.clients + `/${5}`)
            .then(response => {
                setClient(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    },
    putClient(client, setClient) {
        return $api.put(ROUTS_API.clientUser + `/${client.clientId}`, ({
            clientId: client.clientId,
            passportNumber: client.passportNumber,
            email: client.email,
            bithDate: moment(client.bithDate).utcOffset('GMT').format(),
            userId: client.userId,
            firstName: client.firstName,
            lastName: client.lastName,
            patronymic: client.patronymic,
            phone: client.phone,
            login: client.login,
            password: client.password,
            role: "User"
        }))
            .then(response => {
                $api.get(ROUTS_API.clients + `/${client.clientId}`)
                    .then(response => {
                        setClient(response.data)
                        successAddNotification()
                    })
            })
            .catch(error => {
                if (error.response.status === 500 || error.response.status === 400) {
                    console.log(error.message)
                    errorNotification()
                }
            })
    }
}

export default ClientService;