import React, { useState } from 'react';
import { AddTourForm } from "../../Forms/AddTourForm/AddTourForm";

import { Modal } from "antd";

export function AddTourModal({modalVisibility, setModalVisibility, setTour, handleOk}) {
    const [arrivalCity, setArrivalCity] = useState('');
    const [departureCity, setDepartureCity] = useState('');
    const [tourType, setTourType] = useState('');
    const [amountOfDays, setAmountOfDays] = useState('');
    const [nameOfTour, setNameOfTour] = useState('');

    const handleCancel = () => {
        setModalVisibility(false);
        setTour(null);
    };

    return (
        <Modal title="Добавить менеджера"
               visible={modalVisibility}
               okText="Сохранить"
               cancelText="Закрыть"
               onOk={() => handleOk({
                   "arrivalCity": arrivalCity,
                   "departureCity": departureCity,
                   "tourType": tourType,
                   "amountOfDays": amountOfDays,
                   "operator": "SunTour",
                   "nameOfTour": nameOfTour
               })}
               onCancel={() => {
                   handleCancel()
               }}
        >
            <AddTourForm
                onChangeArrivalCity={(arrivalCity) => {setArrivalCity(arrivalCity)}}
                onChangeDepartureCity={(departureCity) => {setDepartureCity(departureCity)}}
                onChangeTourType={(tourType) => {setTourType(tourType)}}
                onChangeAmountOfDays={(amountOfDays) => {setAmountOfDays(amountOfDays)}}
                onChangeNameOfTour={(nameOfTour) => {setNameOfTour(nameOfTour)}}
            />
        </Modal>
    );
}