import React from 'react';

import { Form, Input } from "antd";

export function Email({ onChange }) {
    return (
        <Form.Item
            label="Адрес почты"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели почту!',
                },
            ]}
        >
            <Input
                placeholder="Введите почту"
                onChange={onChange}
            />
        </Form.Item>
    );
}