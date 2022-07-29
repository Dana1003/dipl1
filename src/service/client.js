import $api from '../http';
import {ROUTS_API} from "../routs";
import moment from "moment";
import notifications from '../notifications/notifications';

const ClientService = {
    getClient(setClient) {
        return $api.get(ROUTS_API.clients + `/${5}`)//like
            .then(response => {
                setClient(response.data)
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
                        notifications.successNotification("Данные были успешно изменены!")
                    })
            })
            .catch(error => {
                if (error.response.status === 500 || error.response.status === 400) {
                    console.log(error.message)
                    notifications.errorNotification("Данные не были изменены! что-то пошло не так!")
                }
            })
    }
}

export default ClientService;