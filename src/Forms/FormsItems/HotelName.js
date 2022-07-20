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
                 /*   pattern: new RegExp("^([А-Я][а-я]{1,})$|([А-Я]+[а-я]{1,}\\s){1,}\\S{1,}")*/
                    pattern: new RegExp("^([А-Я][а-яё]+)$|^([А-Я]{1}[а-яё]+)+(\\s[А-Я]{1}[а-яё]+)+$"),
                    message: 'Вы ввели невалидное значение!'
                }
            ]}
        >
            <Input placeholder="Введите название отеля" onChange={onChange}/>
        </Form.Item>
    );
}