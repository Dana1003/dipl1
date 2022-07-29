import $api from '../http';
import { ROUTS_API } from "../routs";
import notifications from "../notifications/notifications";

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
                notifications.successNotification('Данные были успешно удалены!')
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были удалены! Что-то пошло не так!')
            })
    },
    postManager(managers, setManagers, managerUser) {
        return $api.post(ROUTS_API.managerUser, managerUser)
            .then(response => {
                setManagers([...managers, response.data]);
                notifications.successNotification('Данные были успешно даобалены!')
            })
            .catch(error => {
                if (error.response.status === 500 || error.response.status === 400) {
                    console.log(error.message)
                    notifications.errorNotification('Данные не были добалены! Что-то пошло не так!')
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
                notifications.successNotification('Данные были успешно отредактированы!')
            })
            .catch(error => {
                if (error.response.status === 500 || error.response.status === 400) {
                    console.log(error.message)
                    notifications.errorNotification('Данные не были отредактированы! Что-то пошло не так!')
                }
            })
    }
}

export default ManagerService;