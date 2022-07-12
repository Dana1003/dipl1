import React from 'react';

import { Form, Input } from "antd";

export function WorkExperience({ onChange, value }) {
    return (
        <Form.Item
            label="Опыт работы"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели опыт работы!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите опыт работы"
                onChange={onChange}
            />
        </Form.Item>
    );
}