import React from 'react';

import { Form, Input } from "antd";

export function RoomCost({onChange, value}) {
    return (
        <Form.Item
            label="Цена за номер"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели цену за номер!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите цену за номер"
                onChange={onChange}
            />
        </Form.Item>
    );
}