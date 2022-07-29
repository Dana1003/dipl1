import $api from '../http';
import { ROUTS_API } from "../routs";
import notifications from "../notifications/notifications";

const TourService = {
    getTours(setTours) {
        return $api.get(ROUTS_API.tours)
            .then(response => {
                setTours(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    },
    deleteTour(key, tours, setTours) {
        return $api.delete(ROUTS_API.tours + `/${key}`)
            .then(response => {
                setTours(tours.filter((item) => item.tourId !== key))
                notifications.successNotification('Данные были успешно удалены!')
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были удалены! Что-то пошло не так!')
            })
    },
    postTour(newTour, setTours, tours) {
        return $api.post(ROUTS_API.tours, newTour)
            .then(response => {
                setTours([...tours, response.data]);
                notifications.successNotification('Данные были успешно добавлены!')
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были добавлены! Что-то пошло не так!')

            })
    },
    putTour(tour, setTours) {
        return $api.put(ROUTS_API.tours + `/${tour.key}`, ({
            tourId: tour.key,
            arrivalCity: tour.arrivalCity,
            departureCity: tour.departureCity,
            tourType: tour.tourType,
            amountOfDays: tour.amountOfDays,
            operator: "SunTour",
            nameOfTour: tour.nameOfTour,
            tourCost: tour.tourCost
        }))
            .then(response => {
                this.getTour(setTours)
                notifications.successNotification('Данные были успешно отредактированы!')
            })
            .catch(error => {
                    console.log(error.message)
                notifications.errorNotification('Данные не были отредактированы! Что-то пошло не так!')

            })
    }
}

export default TourService;