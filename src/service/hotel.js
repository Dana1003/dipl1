import $api from '../http';
import { ROUTS_API } from "../routs";
import notifications from '../notifications/notifications';

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
                notifications.successNotification('Данные были успешно удалены!')
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были удалены! Что-то пошло не так!')
            })
    },
    postHotel(hotelToAdd, hotels, setHotels) {
        return $api.post(ROUTS_API.hotels, hotelToAdd)
            .then(response => {
                setHotels([...hotels, response.data])
                notifications.successNotification('Данные были успешно добавлены!')
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были добавлены! Что-то пошло не так!')

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
                notifications.successNotification('Данные были успешно отредактированы!')
            })
            .catch(error => {
                console.log(error.message)
                notifications.errorNotification('Данные не были отредактированы! Что-то пошло не так!')

            })
    }
}

export default HotelService;