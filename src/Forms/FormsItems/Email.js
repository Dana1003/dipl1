import React from 'react';

import { Form, Input } from "antd";

export function Email({ onChange }) {
    return (
        <Form.Item
            label="Номер почту"
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели почту!',
                },
            ]}
        >
            <Input
                placeholder="Введите почту"
                onChange={(e) => {onChange(e.target.value)}}
            />
        </Form.Item>
    );
}