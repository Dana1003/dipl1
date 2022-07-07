import React, {useState} from 'react';
import {Form, Input} from "antd";
import {LockOutlined} from "@ant-design/icons";

export function Patronymic() {
    const [setPatronymic] = useState('');

    return (
        <>
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
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Введите пароль"
                    onChange={(e) => setPatronymic(e.target.value)}
                />
            </Form.Item>
        </>
    );
}