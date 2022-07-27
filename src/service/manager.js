import $api from '../http';
import { ROUTS_API } from "../routs";

import { notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined } from "@ant-design/icons";

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

const ManagerService = {
    getManagers(setManagers) {
        return $api.get(ROUTS_API.managers)
            .then(response => {
                setManagers(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    },
    deleteManager(key, managers, setManagers) {
        return $api.delete(ROUTS_API.managers + `/${key}`)
            .then(response => {
                setManagers(managers.filter((item) => item.managerId !== key))
                successDeleteNotification()
            })
            .catch(error => {
                console.log(error.message)
                errorNotification()
            })
    },
    postManager(managers, setManagers, managerUser) {
        return $api.post(ROUTS_API.managerUser, managerUser)
            .then(response => {
                setManagers([...managers, response.data]);
                successAddNotification()
            })
            .catch(error => {
                if (error.response.status === 500 || error.response.status === 400) {
                    console.log(error.message)
                    errorNotification()
                }
            })
    },
    putManager(manager, setManagers) {
        return $api.put(ROUTS_API.managerUser + `/${manager.key}`, ({
            managerId: manager.key,
            firstName: manager.firstName,
            lastName: manager.lastName,
            patronymic: manager.patronymic,
            login: manager.login,
            workExperience: manager.experience,
            phone: manager.phone,
            role: "Manager",
            userId: manager.key,
            password: ""
        }))
            .then(response => {
                this.getManagers(setManagers)
                successAddNotification()
            })
            .catch(error => {
                if (error.response.status === 500 || error.response.status === 400) {
                    console.log(error.message)
                    errorNotification()
                }
            })
    }
}

export default ManagerService;