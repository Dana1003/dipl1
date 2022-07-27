import React from 'react';
import { EditHotelDetailsForm } from "../../Forms/EditHotelDetailsForm/EditHotelDetailsForm";

import { Modal } from "antd";

export function EditHotelDetailsModal({setIsEditingVisible, setHotel, isEditingVisible, hotel, setHotels}) {
    const onResetEditing = () => {
        setIsEditingVisible(false)
        setHotel(null)
    }

    return (
        <Modal
            title="Редактировать данные о отеле"
            visible={isEditingVisible}
            footer={null}
            onCancel={onResetEditing}
        >
            <EditHotelDetailsForm hotel={hotel} setHotel={setHotel} onResetEditing={onResetEditing} setHotels={setHotels}/>
        </Modal>
    );
}