import React from 'react';

import { Form, Input } from "antd";

export function Phone({onChange}) {
    return (
        <Form.Item
            label="Номер телефона"
            name="phoneNumber"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели номер телефона!',
                },
                {
                    pattern: new RegExp("^((\\+375)+((29)|(44)|(33))+[0-9]{7})$"),
                    message: 'Неверный формат данных! Пример: +375291234567'
                }
            ]}
        >
            <Input placeholder="Введите номер телефона" onChange={onChange}/>
        </Form.Item>
    );
}