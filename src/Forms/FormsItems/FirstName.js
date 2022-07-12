import React from 'react';

import { Form, Input } from "antd";

export function FirstName({ onChange, value }) {
    return (
        <Form.Item
            label="Имя"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели имя!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите имя"
                onChange={onChange}
            />
        </Form.Item>
    );
}