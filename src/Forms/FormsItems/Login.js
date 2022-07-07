import React from 'react';

import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

export function Login({ onChange }) {
    return (
            <Form.Item
                label="Логин"
                name="login"
                rules={[
                    {
                        required: true,
                        message: 'Вы не ввели логин!',
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Введите логин"
                    onChange={(e) => {onChange(e.target.value)}}
                />
            </Form.Item>
    );
}