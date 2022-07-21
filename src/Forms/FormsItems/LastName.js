import React from 'react';

import { Form, Input } from "antd";

export function LastName({onChange}) {
    return (
        <Form.Item
            label="Фамилия"
            name="lastName"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели фамилию!',
                },
                {
                    pattern: new RegExp("^[А-Я][а-я]+$"),
                    message: 'Вы ввели невалидное значение!'
                }
            ]}
        >
            <Input placeholder="Введите фамилию" onChange={onChange}/>
        </Form.Item>
    );
}