import React from 'react';

import { Form, Input } from "antd";

export function Patronymic({onChange}) {
    return (
        <Form.Item
            label="Отчество"
            name="patronymic"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели отчество!',
                },
                {
                    pattern: new RegExp("^[А-Я][а-я]+$"),
                    message: 'Вы ввели невалидное значение!'
                }
            ]}
        >
            <Input placeholder="Введите пароль" onChange={onChange}/>
        </Form.Item>
    );
}