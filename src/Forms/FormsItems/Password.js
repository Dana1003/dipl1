import React from 'react';

import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

export function Password({onChange}) {
    return (
        <Form.Item
            label="Пароль"
            name="password"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели пароль!',
                },
                {
                    pattern: new RegExp("(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}"),
                    message: "Неверный формат данных! Должна быть хотя бы одна заглавная буква!"
                }
            ]}
        >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}
                            placeholder="Введите пароль"
                            onChange={onChange}
            />
        </Form.Item>
    );
}