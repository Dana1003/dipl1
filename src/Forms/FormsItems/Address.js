import React from 'react';

import { Form, Input } from "antd";

export function Address({ onChange, value }) {
    return (
        <Form.Item
            label="Адрес"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели адрес!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите адрес"
                onChange={ onChange }
            />
        </Form.Item>
    );
}