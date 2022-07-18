import React from 'react';

import { Form, Input } from "antd";

export function CountOfChildren({ onChange, value }) {
    return (
        <Form.Item
            label="Кол-во детей"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели значение!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите кол-во детей"
                onChange={onChange}
            />
        </Form.Item>
    );
}