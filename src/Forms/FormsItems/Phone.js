import React from 'react';

import { Form, Input } from "antd";

export function Phone({ onChange}) {
    return (
        <Form.Item
            label="Номер телефона"
            name="phone"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели номер телефона!',
                },
            ]}
        >
            <Input
                placeholder="Введите номер телефона"
                onChange={(e) => onChange(e.target.value)}
            />
        </Form.Item>
    );
}