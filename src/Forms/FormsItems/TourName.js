import React from 'react';

import { Form, Input } from "antd";

export function TourName({onChange}) {
    return (
        <Form.Item
            label="Название тура"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели название тура!',
                },
            ]}
        >
            <Input
                placeholder="Введите логин"
                onChange={onChange}
            />
        </Form.Item>
    );
}