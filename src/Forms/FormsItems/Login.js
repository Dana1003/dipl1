import React from 'react';

import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

export function Login({ onChange, value }) {
    return (
            <Form.Item
                label="Логин"
                rules={[
                    {
                        required: true,
                        message: 'Вы не ввели логин!',
                    },
                ]}
            >
                <Input
                    value={value}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Введите логин"
                    onChange={ onChange/*(e) => {onChange(e.target.value)}*/}
                />
            </Form.Item>
    );
}