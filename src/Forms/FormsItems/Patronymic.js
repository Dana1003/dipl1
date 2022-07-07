import React, {useState} from 'react';

import {Form, Input} from "antd";

export function Patronymic() {
    const [setPatronymic] = useState('');

    return (
        <Form.Item
            label="Отчество"
            name="patronymic"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели отчество!',
                },
            ]}
        >
            <Input
                placeholder="Введите пароль"
                onChange={(e) => setPatronymic(e.target.value)}
            />
        </Form.Item>
    );
}