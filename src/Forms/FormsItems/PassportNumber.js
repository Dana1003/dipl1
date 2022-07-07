import React, { useState } from 'react';

import { Form, Input } from "antd";

export function PassportNumber() {
    const [setPassportNumber] = useState('');

    return (
        <Form.Item
            label="Номер паспорта"
            name="passportNumber"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели номер паспорта!',
                },
            ]}
        >
            <Input
                placeholder="Введите номер паспорта"
                onChange={(e) => setPassportNumber(e.target.value)}
            />
        </Form.Item>
    );
}