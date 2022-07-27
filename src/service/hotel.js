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

const HotelService = {
    getHotels(setHotels) {
        return $api.get(ROUTS_API.hotels)
            .then(response => {
                setHotels(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    },
    getHotelByCity(value, setHotels, setIsHotelsVisible) {
        $api.get(ROUTS_API.hotels + `/findHotels?city=${value[0].departureCity}`)
            .then(res => {
                setHotels(res.data);
                setIsHotelsVisible(true)
            })
            .catch(error => {
                console.log(error.message)
            })
    },
    deleteHotel(key, hotels, setHotels) {
        return $api.delete(ROUTS_API.hotels + `/${key}`)
            .then(response => {
                setHotels(hotels.filter((item) => item.hotelId !== key))
                successDeleteNotification()
            })
            .catch(error => {
                console.log(error.message)
                errorNotification()
            })
    },
    postHotel(hotelToAdd, hotels, setHotels) {
        return $api.post(ROUTS_API.hotels, hotelToAdd)
            .then(response => {
                setHotels([...hotels, response.data])
                successAddNotification()
            })
            .catch(error => {
                if (error.response.status === 500 || error.response.status === 400) {
                    console.log(error.message)
                    errorNotification()
                }
            })
    },
    putHotel(hotel, setHotels) {
        return $api.put(ROUTS_API.hotels + `/${hotel.key}`, ({
            "nameOfHotel": hotel.nameOfHotel,
            "city": hotel.city,
            "countOfStars": hotel.countOfStars,
            "address": hotel.address,
            "roomCost": hotel.roomCost
        }))
            .then(response => {
                this.getHotels(setHotels)
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

export default HotelService;