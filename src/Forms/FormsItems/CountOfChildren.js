import React from 'react';

import { Form, InputNumber } from "antd";

export function CountOfChildren({onChange}) {
    return (
        <Form.Item
            label="Количество детей"
            name="countOfChildren"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели значение!',
                },
                {
                    type: 'number',
                    min: 0,
                    max: 20,
                    message: 'Введите валидное число (от 0 до 20)'
                }
            ]}
        >
            <InputNumber placeholder="Введите количество детей" onChange={onChange}/>
        </Form.Item>
    );
}