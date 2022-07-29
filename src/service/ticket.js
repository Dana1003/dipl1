import $api from '../http';
import { ROUTS_API } from "../routs";
import notifications from "../notifications/notifications";

const TicketService = {
    getTicketByClientId(setTickets) {

        return $api.get(ROUTS_API.tickets + `/findTickets`)
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
                notifications.successNotification('Данные были успешно удалены!')
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были удалены! Что-то пошло не так!')
            })
    },
    getAllTickets(setTickets) {
        return $api.get(ROUTS_API.tickets)
            .then(response => {
                setTickets(response.data.map(x => x.nameOfTour));
            });
    },
    getFavouriteByClientId(setTickets) {
        return $api.get(ROUTS_API.clientFavouriteTourHotel + `${5}`)
            .then(response => {
                setTickets(response.data);
            });
    },
    putTicket(ticketToAdd, ticket, setTickets) {
        return $api.put(ROUTS_API.tickets + `/${ticket.key}`, ticketToAdd)
            .then(response => {
                this.getFavouriteByClientId(setTickets)
                notifications.successNotification('Данные были успешно отредактированы!')
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были добавлены! Что-то пошло не так!')
            })
    }
}

export default TicketService;