import React, { useState } from 'react';

import { Form, Input } from "antd";

export function Email() {
    const [email, setEmail] = useState('');

    return (
        <Form.Item
            label="Номер почту"
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели почту!',
                },
            ]}
        >
            <Input
                placeholder="Введите почту"
                onChange={(e) => setEmail(e.target.value)}
            />
        </Form.Item>
    );
}