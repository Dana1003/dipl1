import React from 'react';

import { Form, InputNumber } from "antd";

export function RoomCost({onChange}) {
    return (
        <Form.Item
            label="Цена за номер"
            name="roomCost"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели цену за номер!',
                },
                {
                    type: 'number',
                    min: 1,
                    message: 'Цена не должна быть отрицательным значением!'
                }
            ]}
        >
            <InputNumber placeholder="Введите цену за номер" onChange={onChange}/>
        </Form.Item>
    );
}