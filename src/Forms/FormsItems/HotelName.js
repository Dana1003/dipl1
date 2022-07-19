import React from 'react';

import { Form, Input } from "antd";

export function HotelName({onChange}) {
    return (
        <Form.Item
            label="Название отеля"
            name="nameOfHotel"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели название отеля!',
                },
                {
                    pattern: new RegExp("^([А-Я][а-я]{1,})$")
                }
            ]}
        >
            <Input placeholder="Введите название отеля" onChange={onChange}/>
        </Form.Item>
    );
}