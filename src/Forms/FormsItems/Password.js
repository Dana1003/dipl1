import React from 'react';

import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

export function Password({ onChange }) {
    return (
        <Form.Item
            label="Пароль"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели пароль!',
                },
            ]}
        >
            <Input.Password
                prefix={<LockOutlined className="site-form-item-icon"/>}
                placeholder="Введите пароль"
                onChange={(event) => {onChange(event.target.value)}}
            />
        </Form.Item>
    );
}