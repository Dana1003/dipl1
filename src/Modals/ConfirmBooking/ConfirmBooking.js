import React from 'react';

import { Modal } from "antd";

export function ConfirmBooking({onConfirmBookingHandle, isModalVisible, setIsModalVisible, onCalculateCost}) {
    const resetConfirm = () => {
        setIsModalVisible(false)
    }
    return (
        <Modal
            title="Подтвердить бронирование"
            visible={isModalVisible}
            okText="Подтвердить"
            cancelText="Отмена"
            onCancel={resetConfirm}
            onOk={onConfirmBookingHandle}
        >
            Общая сумма равна: {onCalculateCost()} рублей
        </Modal>
    );
}