import React from 'react';

import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

export function Login({onChange, value}) {
    return (
        <Form.Item
            label="Логин"
            name="login"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели логин!',
                },
                {
                    pattern: new RegExp("([a-zA-Z]{3,30}\\s*)+"),
                    message: "Неверный формат данных"
                },
                {
                    whitespace: true,
                }
            ]}
        >
            <Input
                prefix={<UserOutlined className="site-form-item-icon"/>}
                placeholder="Введите логин"
                onChange={onChange}
            />
        </Form.Item>
    );
}