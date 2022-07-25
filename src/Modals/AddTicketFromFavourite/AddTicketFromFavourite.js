import React from 'react';

import { Modal } from "antd";
import {AddTicketFromFavouriteForm} from "../../Forms/AddTicketFromFavouriteForm/AddTicketFromFavouriteForm";

export function AddTicketFromFavourite({isModalVisible, handleOk, setHotel, setIsModalVisible}) {
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
            <AddTicketFromFavouriteForm handleOk={handleOk}/>
        </Modal>
    );
}