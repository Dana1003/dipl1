import React from 'react';
import { HotelName } from "../FormsItems/HotelName";
import { Address } from "../FormsItems/Address";
import { City } from "../FormsItems/City";
import { RoomCost } from "../FormsItems/RoomCost";

import {Form, Rate} from "antd";

export function AddHotelForm({onChangeNameOfHotel, onChangeCountOfStars, onChangeAddress, onChangeCity, onChangeRoomCost}) {

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
            <Rate allowClear={false} onChange={(e) => onChangeCountOfStars(e)}/>
            <Address onChange={(e) => {onChangeAddress(e.target.value)}}/>
            <City onChange={(e) => {onChangeCity(e)}}/>
            <RoomCost onChange={(e) => {onChangeRoomCost(e.target.value)}} />
        </Form>
    );
}