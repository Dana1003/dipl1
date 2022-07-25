import React from 'react';
import { AddHotelForm } from "../../Forms/AddHotelForm/AddHotelForm";

import { Modal } from "antd";

export function AddHotelModal({isModalVisible, handleOk, setHotel, setIsModalVisible}) {
    const handleCancel = () => {
        setIsModalVisible(false);
        setHotel(null);
    };

    return (
        <Modal title="Добавить отель"
               visible={isModalVisible}
               footer={null}
               onCancel={handleCancel}
        >
            <AddHotelForm handleOk={handleOk}/>
        </Modal>
    );
}