import React from 'react';

import { Form, Input } from "antd";

export function LastName({ onChange, value }) {
    return (
        <Form.Item
            label="Фамилия"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели фамилию!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите фамилию"
                onChange={ onChange }
            />
        </Form.Item>
    );
}