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
                successDeleteNotification()
            })
            .catch(error => {
                console.log(error.message)
                errorNotification()
            })
    },
    postTour(newTour, setTours, tours) {
        return $api.post(ROUTS_API.tours, newTour)
            .then(response => {
                setTours([...tours, response.data]);
                successAddNotification()
            })
            .catch(error => {
                if (error.response.status === 500 || error.response.status === 400) {
                    console.log(error.message)
                    errorNotification()
                }
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

export default TourService;