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

const TicketService = {
    getTicketByClientId(setTickets) {
        return $api.get(ROUTS_API.tickets + `/findTickets?clientId=${5}`)
            .then(response => {
                setTickets(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    },
    deleteTicket (key, setTickets, tickets) {
        return $api.delete(ROUTS_API.tickets + `/${key}`)
            .then(response => {
                setTickets(tickets.filter((item) => item.ticketId !== key))
                successAddNotification()
            })
            .catch(error => {
                console.log(error.message)
                errorNotification()
            })
    },
    getAllTickets(setTickets) {
        return $api.get(ROUTS_API.tickets)
            .then(response => {
                setTickets(response.data.map(x => x.nameOfTour));
            });
    }
}

export default TicketService;