import React from 'react';

import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

export function ConfirmPassword({ onChange }) {
    return (
        <Form.Item
            label="Подтвердите пароль"
            name="confirmPassword"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели пароль!',
                },
            ]}
        >
            <Input.Password
                prefix={<LockOutlined className="site-form-item-icon"/>}
                placeholder="Введите пароль ещё раз"
                onChange={(event) => {onChange(event.target.value)}}
            />
        </Form.Item>
    );
}