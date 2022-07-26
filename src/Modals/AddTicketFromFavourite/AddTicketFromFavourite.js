import React from 'react';
import { AddTicketFromFavouriteForm } from "../../Forms/AddTicketFromFavouriteForm/AddTicketFromFavouriteForm";

import { Modal } from "antd";

export function AddTicketFromFavourite({isModalVisible, handleOk, setTicket, setIsModalVisible, ticket}) {
    const handleCancel = () => {
        setIsModalVisible(false);
        setTicket(null);
    };

    return (
        <Modal title="Заказать билет"
               visible={isModalVisible}
               footer={null}
               onCancel={handleCancel}
        >
            <AddTicketFromFavouriteForm handleOk={handleOk} ticket={ticket}/>
        </Modal>
    );
}