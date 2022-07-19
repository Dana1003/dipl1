import React from 'react';

import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

export function ConfirmPassword({onChange}) {
    return (
        <Form.Item
            label="Подтвердите пароль"
            name="confirmPassword"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели пароль!',
                },
                {
                    pattern: new RegExp("(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}"),
                    message: "Неверный формат данных"
                }
            ]}
        >
            <Input.Password
                prefix={<LockOutlined className="site-form-item-icon"/>}
                placeholder="Введите пароль ещё раз"
                onChange={onChange}
            />
        </Form.Item>
    );
}