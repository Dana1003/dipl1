import React, { useState } from 'react';

import {Form, Input} from "antd";
import {LockOutlined} from "@ant-design/icons";

export function Password() {
    const [setPassword] = useState('');

    return (
        <>
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
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Введите пароль"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Item>
        </>
    );
}