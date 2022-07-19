import React from 'react';

import { Form, Input } from "antd";

export function CountOfChildren({ onChange, value }) {
    return (
        <Form.Item
            label="Количество детей"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели значение!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите количество детей"
                onChange={onChange}
            />
        </Form.Item>
    );
}