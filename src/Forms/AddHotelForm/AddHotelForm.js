import React, { useState } from 'react';
import { HotelName } from "../FormsItems/HotelName";
import { CountOfStars } from "../FormsItems/CountOfStars";
import { Address } from "../FormsItems/Address";
import { City } from "../FormsItems/City";
import { RoomCost } from "../FormsItems/RoomCost";
import { SaveButton } from "../FormsItems/SaveButton";

import { Form } from "antd";

export function AddHotelForm({handleOk}) {
    const [nameOfHotel, setNameOfHotel] = useState('')
    const [countOfStars, setCountOfStars] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [roomCost, setRoomCost] = useState('')

    return (
        <Form
            onFinish={() => handleOk({
                "nameOfHotel": nameOfHotel,
                "city": city,
                "countOfStars": countOfStars,
                "address": address,
                "roomCost": roomCost
            })}
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
            <HotelName onChange={(e) => {setNameOfHotel(e.target.value)}}/>
            <CountOfStars onChange={(e) => {setCountOfStars(e)}}/>
            <Address onChange={(e) => {setAddress(e.target.value)}}/>
            <City onChange={(e) => {setCity(e)}}/>
            <RoomCost onChange={(e) => {setRoomCost(e)}} />
            <SaveButton />
        </Form>
    );
}