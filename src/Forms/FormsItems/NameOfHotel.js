import React from 'react';

import { Form, Input } from "antd";

export function NameOfHotel({ onChange, value }) {
    return (
        <Form.Item
            label="Название отеля"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели название отеля!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите название отеля"
                onChange={ onChange }
            />
        </Form.Item>
    );
}