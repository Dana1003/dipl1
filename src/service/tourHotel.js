import $api from '../http';
import { ROUTS_API } from "../routs";
import TourService from "./tour";
import notifications from "../notifications/notifications";

const TourHotelService = {
    postTourHotel(selectedTour, selectedHotel,
                  onCalculateCost, date,
                  countOfDays, countOfChildren,
                  countOfAdult, setIsTicketVisible,
                  setIsHotelsVisible, setSelectedHotel,
                  setSelectedTour, setDate,
                  setCountOfDays, setCountOfAdult,
                  setCountOfChildren) {
        return $api.post(ROUTS_API.tourHotel, ({
            "tourId": selectedTour.key,
            "hotelId": selectedHotel.key
        }))
            .then(response => {
                $api.post(ROUTS_API.tickets, ({
                    "clientId": 5,
                    "tourHotelId": response.data.tourHotelId,
                    "cost": onCalculateCost(),
                    "departureDate": date.utcOffset('GMT').format(),
                    "arrivalDate": date.add('Days', countOfDays).utcOffset('GMT').format(),
                    "status": true,
                    "countOfPeople": Number(countOfChildren) + Number(countOfAdult)
                }))
                    .then(response => {
                        setIsTicketVisible(false)
                        setIsHotelsVisible(false)
                        setSelectedHotel(null)
                        setSelectedTour(null)
                        setDate(null)
                        setCountOfDays(0)
                        setCountOfAdult(0)
                        setCountOfChildren(0)
                        notifications.successNotification('Данные были успешно добавлены!')
                    })
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были добавлены! Что-то пошло не так!')
            })
    },
    postTourHotelToFavourite(selectedTour, selectedHotel, setIsHotelsVisible, setSelectedHotel, setSelectedTour, setTours) {
        return $api.post(ROUTS_API.tourHotel, ({
            "tourId": selectedTour.key,
            "hotelId": selectedHotel.key
        }))
            .then(response => {
                $api.post(ROUTS_API.favourite, ({
                    "clientId": 5,
                    "tourHotelId": response.data.tourHotelId,
                    "status": false
                }))
                    .then(response => {
                        setIsHotelsVisible(false)
                        setSelectedHotel(null)
                        setSelectedTour(null)
                        TourService.getTours(setTours)
                        notifications.successNotification('Данные были успешно добавлены!')
                    })
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были добавлены! Что-то пошло не так!')
            })
    }
}

export default TourHotelService;