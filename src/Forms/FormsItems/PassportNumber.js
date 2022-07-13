import React from 'react';

import { Form, Input } from "antd";

export function PassportNumber({ onChange }) {
    return (
        <Form.Item
            label="Номер паспорта"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели номер паспорта!',
                },
            ]}
        >
            <Input
                placeholder="Введите номер паспорта"
                onChange={onChange}
            />
        </Form.Item>
    );
}