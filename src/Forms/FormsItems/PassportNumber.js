import React from 'react';

import { Form, Input } from "antd";

export function PassportNumber({ onChange }) {
    return (
        <Form.Item
            label="Номер паспорта"
            name="passportNumber"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели номер паспорта!',
                },
            ]}
        >
            <Input
                placeholder="Введите номер паспорта"
                onChange={(e) => onChange(e.target.value)}
            />
        </Form.Item>
    );
}