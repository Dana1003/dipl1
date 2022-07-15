import React from 'react';
import axios from "axios";


import { Modal } from "antd";
import {EditHotelDetailsForm} from "../../Forms/EditHotelDetailsForm/EditHotelDetailsForm";

export function EditHotelDetailsModal({setIsEditingVisible, setHotel, isEditingVisible, hotel, setHotels}) {
    const resetEditing = () => {
        setIsEditingVisible(false)
        setHotel(null)
    };

    const updatedHotel = () => {
        axios.put(`https://localhost:7274/api/hotels/${hotel.key}`, ({
            "nameOfHotel": hotel.nameOfHotel,
            "city": hotel.city,
            "countOfStars": hotel.countOfStars,
            "address": hotel.address
        })).then(temp => {
            axios.get('https://localhost:7274/api/hotels')
                .then(res => {
                    setHotels(res.data);
                });
        }).catch(err => {
            if (err.response.status === 500) {
                //alert('Не удалось обновить данные об отеле!\nВнутренняя ошибка сервера!')
            }
        })
        resetEditing();
    }

    return (
        <Modal
            title="Редактировать данные о отеле"
            visible={isEditingVisible}
            okText="Сохранить"
            cancelText="Закрыть"
            onCancel={resetEditing}
            onOk={updatedHotel}
        >
            <EditHotelDetailsForm hotel={hotel} setHotel={setHotel}/>
        </Modal>
    );
}