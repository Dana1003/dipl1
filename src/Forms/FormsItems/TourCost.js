import React from 'react';

import { Form, Input } from "antd";

export function TourCost({onChange}) {
    return (
        <Form.Item
            label="Цена тура"
            name="tourCost"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели цену тура!',
                },
                {
                    type: 'number',
                    min: 1,
                    message: 'Цена не должна быть отрицательным значением!'
                }
            ]}
        >
            <Input placeholder="Введите цену тура" onChange={onChange}/>
        </Form.Item>
    );
}