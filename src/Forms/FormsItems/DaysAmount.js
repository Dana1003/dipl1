import React from 'react';

import { Form, InputNumber } from "antd";

export function DaysAmount({onChange}) {
    return (
        <Form.Item
            label="Количество дней"
            name="daysAmount"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели количество дней!',
                },
                {
                    type: 'number',
                    min: 1,
                    max: 30,
                    message: 'Введите валидное число (от 1 до 30)'
                }
            ]}
        >
            <InputNumber placeholder="Введите количество дней" onChange={onChange}/>
        </Form.Item>
    );
}