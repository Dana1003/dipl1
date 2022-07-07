import React from 'react';

import { Form, Input } from "antd";

export function FirstName({ onChange }) {
    return (
        <Form.Item
            label="Имя"
            name="firstName"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели имя!',
                },
            ]}
        >
            <Input
                placeholder="Введите имя"
                onChange={(e) => {onChange(e.target.value)}}
            />
        </Form.Item>
    );
}