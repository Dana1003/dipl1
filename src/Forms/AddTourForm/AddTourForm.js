import React from 'react';
import { ArrivalCity } from "../FormsItems/ArrivalCity";
import { DepartureCity } from "../FormsItems/DepartureCity";
import { TourType } from "../FormsItems/TourType";
import { TourName } from "../FormsItems/TourName";
import { DaysAmount } from "../FormsItems/DaysAmount";

import { Form } from "antd";

export function AddTourForm({onChangeArrivalCity, onChangeDepartureCity, onChangeTourType, onChangeNameOfTour, onChangeAmountOfDays}) {
    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 14,
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >
            <ArrivalCity onChange={(e) => {onChangeArrivalCity(e)}}/>
            <DepartureCity onChange={(e) => {onChangeDepartureCity(e)}}/>
            <TourType onChange={(e) => {onChangeTourType(e)}}/>
            <TourName onChange={(e) => {onChangeNameOfTour(e.target.value)}}/>
            <DaysAmount onChange={(e) => {onChangeAmountOfDays(e.target.value)}}/>
        </Form>
    );
}
