import React from 'react';

import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

export function Login({onChange}) {
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
                    pattern: new RegExp("^[0-9a-zA-Z]{6,}$"),
                    message: "Неверный формат данных!"
                }
            ]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                   placeholder="Введите логин"
                   onChange={onChange}
            />
        </Form.Item>
    );
}