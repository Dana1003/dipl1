import React from 'react';

import { Form, InputNumber } from "antd";

export function WorkExperience({onChange}) {
    return (
        <Form.Item
            label="Опыт работы"
            name="experience"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели опыт работы!',
                },
                {
                    type: 'number',
                    min: 1,
                    max: 50,
                    message: 'Вы ввели невалидное значение!'
                }
            ]}
        >
            <InputNumber placeholder="Введите опыт работы" onChange={onChange}/>
        </Form.Item>
    );
}