import React, { useState } from 'react';
import { ArrivalCity } from "../FormsItems/ArrivalCity";
import { DepartureCity } from "../FormsItems/DepartureCity";
import { TourType } from "../FormsItems/TourType";
import { TourName } from "../FormsItems/TourName";
import { DaysAmount } from "../FormsItems/DaysAmount";
import { TourCost } from "../FormsItems/TourCost";
import { SaveButton } from "../FormsItems/SaveButton";

import { Form } from "antd";

export function AddTourForm({handleOk}) {
    const [arrivalCity, setArrivalCity] = useState('');
    const [departureCity, setDepartureCity] = useState('');
    const [tourType, setTourType] = useState('');
    const [amountOfDays, setAmountOfDays] = useState('');
    const [nameOfTour, setNameOfTour] = useState('');
    const [tourCost, setTourCost] = useState('');

    return (
        <Form
            onFinish={() => handleOk({
                "arrivalCity": arrivalCity,
                "departureCity": departureCity,
                "tourType": tourType,
                "amountOfDays": amountOfDays,
                "operator": "SunTour",
                "nameOfTour": nameOfTour,
                "tourCost": tourCost
            })}
            name="basic"
            labelCol={{
                span: 7,
            }}
            wrapperCol={{
                span: 14,
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >
            <ArrivalCity onChange={(e) => {setArrivalCity(e)}}/>
            <DepartureCity onChange={(e) => {setDepartureCity(e)}}/>
            <TourType onChange={(e) => {setTourType(e)}}/>
            <TourName onChange={(e) => {setNameOfTour(e.target.value)}}/>
            <DaysAmount onChange={(e) => {setAmountOfDays(e)}}/>
            <TourCost onChange={(e) => {setTourCost(e)}}/>
            <SaveButton />
        </Form>
    );
}
