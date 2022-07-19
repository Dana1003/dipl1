import React from 'react';

import { Form, Input } from "antd";

export function CountOfAdult({ onChange, value }) {
    return (
        <Form.Item
            label="Количество взрослых"
            rules={[
                {
                    type: 'integer',
                    min: 1,
                    max: 20,
                    required: true,
                    message: 'Вы не ввели значение!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите количество взрослых"
                onChange={onChange}
            />
        </Form.Item>
    );
}