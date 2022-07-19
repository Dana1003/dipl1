import React from 'react';

import { Form, Input } from "antd";

export function Email({onChange}) {
    return (
        <Form.Item
            label="Адрес почты"
            name="email"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели почту!',
                },
                {
                    type: 'email',
                    message: 'Вы ввели невалидный адрес почты!'
                }
            ]}
        >
            <Input placeholder="Введите почту" onChange={onChange}/>
        </Form.Item>
    );
}