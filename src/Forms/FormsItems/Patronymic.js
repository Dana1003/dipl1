import React from 'react';

import { Form, Input } from "antd";

export function Patronymic({ onChange, value}) {
    return (
        <Form.Item
            label="Отчество"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели отчество!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите пароль"
                onChange={onChange}
            />
        </Form.Item>
    );
}