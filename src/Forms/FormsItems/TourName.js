import React from 'react';

import { Form, Input } from "antd";

export function TourName({onChange, value}) {
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
                value={value}
                placeholder="Введите название тура"
                onChange={onChange}
            />
        </Form.Item>
    );
}