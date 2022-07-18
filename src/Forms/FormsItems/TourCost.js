import React from 'react';

import { Form, Input } from "antd";

export function TourCost({onChange, value}) {
    return (
        <Form.Item
            label="Цена тура"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели цену тура!',
                },
            ]}
        >
            <Input
                value={value}
                placeholder="Введите цену тура"
                onChange={onChange}
            />
        </Form.Item>
    );
}