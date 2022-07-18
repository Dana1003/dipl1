import React from 'react';

import { Form, Input } from "antd";

export function CountOfAdult({ onChange, value }) {
    return (
        <Form.Item
            label="Кол-во взрослых"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели значение!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите кол-во взрослых"
                onChange={onChange}
            />
        </Form.Item>
    );
}