import React from 'react';

import { Form, Input } from "antd";

export function Patronymic({ onChange}) {
    return (
        <Form.Item
            label="Отчество"
            name="patronymic"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели отчество!',
                },
            ]}
        >
            <Input
                placeholder="Введите пароль"
                onChange={(e) => onChange(e.target.value)}
            />
        </Form.Item>
    );
}