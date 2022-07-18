import React, { useState } from 'react';
import { AddHotelForm } from "../../Forms/AddHotelForm/AddHotelForm";

import { Modal } from "antd";

export function AddHotelModal({isModalVisible, handleOk, setHotel, setIsModalVisible}) {
    const [nameOfHotel, setNameOfHotel] = useState('');
    const [countOfStars, setCountOfStars] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const handleCancel = () => {
        setIsModalVisible(false);
        setHotel(null);
    };

    return (
        <Modal title="Добавить отель"
               visible={isModalVisible}
               okText="Сохранить"
               cancelText="Закрыть"
               onOk={() => handleOk({
                   "nameOfHotel": nameOfHotel,
                   "city": city,
                   "countOfStars": countOfStars,
                   "address": address
               })}
               onCancel={() => {
                   handleCancel()
               }}
        >
            <AddHotelForm
                onChangeNameOfHotel={(nameOfHotel) => {setNameOfHotel(nameOfHotel)}}
                onChangeAddress={(address) => {setAddress(address)} }
                onChangeCity={(city) => {setCity(city)}}
                onChangeCountOfStars={(countOfStars) => setCountOfStars(countOfStars)}
            />
        </Modal>
    );
}