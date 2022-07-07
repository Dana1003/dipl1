import React from 'react';

import { Form, Input } from "antd";

export function LastName({ onChange }) {
    return (
        <Form.Item
            label="Фамилия"
            name="lastName"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели фамилию!',
                },
            ]}
        >
            <Input
                placeholder="Введите фамилию"
                onChange={(e) => {onChange(e.target.value)}}
            />
        </Form.Item>
    );
}