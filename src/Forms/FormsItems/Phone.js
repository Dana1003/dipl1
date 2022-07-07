import React, {useState} from 'react';
import {Form, Input} from "antd";
import {LockOutlined} from "@ant-design/icons";

export function Phone() {
    const [setPhone] = useState('');

    return (
        <>
            <Form.Item
                label="Номер телефона"
                name="phone"
                rules={[
                    {
                        required: true,
                        message: 'Вы не ввели номер телефона!',
                    },
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Введите номер телефона"
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Form.Item>
        </>
    );
}