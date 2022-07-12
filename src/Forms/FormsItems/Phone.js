import React from 'react';

import { Form, Input } from "antd";

export function Phone({ onChange, value}) {
    return (
        <Form.Item
            label="Номер телефона"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели номер телефона!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите номер телефона"
                onChange={onChange}
            />
        </Form.Item>
    );
}