import React from 'react';
import { HotelName } from "../FormsItems/HotelName";
import { CountOfStars } from "../FormsItems/CountOfStars";
import { Address } from "../FormsItems/Address";
import { City } from "../FormsItems/City";

import { Form } from "antd";

export function AddHotelForm({onChangeNameOfHotel, onChangeCountOfStars, onChangeAddress, onChangeCity}) {

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
            <HotelName onChange={(e) => {onChangeNameOfHotel(e.target.value)}}/>
            <CountOfStars onChange={(e) => {onChangeCountOfStars(e)}}/>
            <Address onChange={(e) => {onChangeAddress(e.target.value)}}/>
            <City onChange={(e) => {onChangeCity(e)}}/>
        </Form>
    );
}