import React, { useState } from 'react';

import { Form, Input } from "antd";

export function LastName() {
    const [lastName, setLastName] = useState('');

    return (
        <Form.Item
            label="Фамилия"
            name="lastName"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели фамилию!',
                },
            ]}
        >
            <Input
                placeholder="Введите фамилию"
                onChange={(e) => setLastName(e.target.value)}
            />
        </Form.Item>
    );
}