import React from 'react';

import { Form, Input } from "antd";

export function DaysAmount({onChange}) {
    return (
        <Form.Item
            label="Количество дней"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели количество дней!',
                },
            ]}
        >
            <Input
                placeholder="Введите количество дней"
                onChange={onChange}
            />
        </Form.Item>
    );
}