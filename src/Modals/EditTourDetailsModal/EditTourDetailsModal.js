import React from 'react';
import {Modal} from "antd";
import axios from "axios";
import {EditTourDetailsForm} from "../../Forms/EditTourDetailsForm/EditTourDetailsForm";

export function EditTourDetailsModal({editingModalVisibility, setEditingModalVisibility, tour, setTour, setTours}) {
    const resetEditing = () => {
        setEditingModalVisibility(false)
        setTour(null)
    };

    const updatedTour = () => {
        axios.put(`https://localhost:7274/api/tours/${tour.key}`, ({
            tourId: tour.key,
            arrivalCity: tour.arrivalCity,
            departureCity: tour.departureCity,
            tourType: tour.tourType,
            amountOfDays: tour.amountOfDays,
            operator: "SunTour",
            nameOfTour: tour.nameOfTour
        })).then(temp => {
            axios.get('https://localhost:7274/api/tours')
                .then(res => {
                    setTours(res.data);
                });
        }).catch(err => {
            if (err.response.status === 500) {
                alert('Внутренняя ошибка сервера!')
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