import React from 'react';

import { Form, Input } from "antd";

export function TourName({onChange}) {
    return (
        <Form.Item
            label="Название тура"
            name="nameOfTour"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели название тура!',
                },
                {
                    pattern: new RegExp("^([А-Я][а-яё]+)$|^(([А-Я]{1}[а-яё]+\s)+)$"),
                    message: 'Вы ввели невалидное значение!'
                }
            ]}
        >
            <Input placeholder="Введите название тура" onChange={onChange}/>
        </Form.Item>
    );
}