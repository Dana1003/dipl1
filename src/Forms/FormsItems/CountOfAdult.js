import React from 'react';

import { Form, InputNumber } from "antd";

export function CountOfAdult({onChange}) {
    return (
        <Form.Item
            label="Количество взрослых"
            name="countOfAdult"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели значение!'
                },
                {
                    type: 'number',
                    min: 1,
                    max: 20,
                    message: 'Введите валидное число (от 1 до 20)'
                }
            ]}
        >
            <InputNumber placeholder="Введите количество взрослых" onChange={onChange}/>
        </Form.Item>
    );
}