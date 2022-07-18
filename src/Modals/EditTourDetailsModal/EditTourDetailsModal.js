import React from 'react';
import axios from "axios";
import { EditTourDetailsForm } from "../../Forms/EditTourDetailsForm/EditTourDetailsForm";

import { Modal, notification } from "antd";
import { CloseCircleOutlined } from '@ant-design/icons';

export function EditTourDetailsModal({editingModalVisibility, setEditingModalVisibility, tour, setTour, setTours}) {
    const resetEditing = () => {
        setEditingModalVisibility(false)
        setTour(null)
    };
    function errorNotification() {
        notification.open({
            message: 'Данные не были добавлены! Что-то пошло не так!',
            icon: <CloseCircleOutlined style={{color: "red"}} />
        });
    }

    const updatedTour = () => {
        axios.put(`https://localhost:7274/api/tours/${tour.key}`, ({
            tourId: tour.key,
            arrivalCity: tour.arrivalCity,
            departureCity: tour.departureCity,
            tourType: tour.tourType,
            amountOfDays: tour.amountOfDays,
            operator: "SunTour",
            nameOfTour: tour.nameOfTour,
            tourCost: tour.tourCost
        })).then(temp => {
            axios.get('https://localhost:7274/api/tours')
                .then(res => {
                    setTours(res.data);
                });
        }).catch(err => {
            if (err.response.status === 500) {
                errorNotification()
            }
        })
        resetEditing();
    }

    return (
        <Modal
            title="Редактировать тур"
            visible={editingModalVisibility}
            okText="Сохранить"
            cancelText="Закрыть"
            onCancel={resetEditing}
            onOk={updatedTour}
        >
            <EditTourDetailsForm tour={tour} setTour={setTour}/>
        </Modal>
    );
}