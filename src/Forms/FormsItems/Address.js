import React from 'react';

import { Form, Input } from "antd";

export function Address({onChange}) {
    return (
        <Form.Item
            label="Адрес"
            name="address"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели адрес!',
                },
            ]}
        >
            <Input placeholder="Введите адрес"
                   onChange={onChange}
            />
        </Form.Item>
    );
}