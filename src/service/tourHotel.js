import $api from '../http';
import { ROUTS_API } from "../routs";

import { notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import TourService from "./tour";

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

const TourHotelService = {
    postTourHotel(selectedTour, selectedHotel,
                  onCalculateCost, date,
                  countOfDays, countOfChildren,
                  countOfAdult, setIsTicketVisible,
                  setIsHotelsVisible, setSelectedHotel,
                  setSelectedTour, setDate,
                  setCountOfDays, setCountOfAdult,
                  setCountOfChildren, successNotification) {
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
                        successAddNotification()
                    })
                    .catch(error => {
                        console.log(error.message)
                        errorNotification()
                    })
            })
            .catch(error => {
                console.log(error.message)
                errorNotification()
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
                        successAddNotification()
                    })
                    .catch(error => {
                        if (error.response.status === 500 || error.response.status === 400) {
                            console.log(error.message)
                            errorNotification()
                        }
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

export default TourHotelService;