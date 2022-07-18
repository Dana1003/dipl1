import React from 'react';
import axios from "axios";
import { EditHotelDetailsForm } from "../../Forms/EditHotelDetailsForm/EditHotelDetailsForm";

import { Modal, notification } from "antd";
import { CloseCircleOutlined } from '@ant-design/icons';

export function EditHotelDetailsModal({setIsEditingVisible, setHotel, isEditingVisible, hotel, setHotels}) {
    const resetEditing = () => {
        setIsEditingVisible(false)
        setHotel(null)
    };

    function errorNotification() {
        notification.open({
            message: 'Что-то пошло не так!',
            icon: <CloseCircleOutlined style={{color: "red"}}/>
        });
    }

    const updatedHotel = () => {
        axios.put(`https://localhost:7274/api/hotels/${hotel.key}`, ({
            "nameOfHotel": hotel.nameOfHotel,
            "city": hotel.city,
            "countOfStars": hotel.countOfStars.props.value,
            "address": hotel.address,
            "roomCost": hotel.roomCost
        })).then(temp => {
            axios.get('https://localhost:7274/api/hotels')
                .then(res => {
                    setHotels(res.data);
                });
        }).catch(err => {
            if (err.response.status === 500) {
                errorNotification();
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