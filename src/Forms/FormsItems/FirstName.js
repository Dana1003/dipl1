import React from 'react';

import { Form, Input } from "antd";

export function FirstName({onChange}) {
    return (
        <Form.Item
            label="Имя"
            name="firstName"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели имя!',
                },
                {
                    pattern: new RegExp("^[А-Я][а-я]{1,}$"),
                    message: 'Вы ввели невалидное значение!'
                }
            ]}
        >
            <Input placeholder="Введите имя" onChange={onChange}/>
        </Form.Item>
    );
}