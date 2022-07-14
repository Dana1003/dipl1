import React, { useState } from 'react';

import { AddReviewForm } from "../../Forms/AddReviewForm/AddReviewForm";

import { Modal } from "antd";

export function AddUserReviewModal({isModalVisible, setIsModalVisible, handleOk}) {
    const [userReviewText, setUserReviewText] = useState('');

    const handleCancel = () => {
        setIsModalVisible(false);
        setUserReviewText(null);
    };

    return (
        <Modal title="Добавить отзыв"
               visible={isModalVisible}
               okText="Сохранить"
               cancelText="Закрыть"
               onOk={() => handleOk({
                   "reviewText": userReviewText,
                   "clientId": 1
               })}
               onCancel={() => {
                   handleCancel()
               }}
        >
            <AddReviewForm onChangeReview={(userReviewText) => {setUserReviewText(userReviewText)}}/>
        </Modal>
    );
}