import React, {useState} from 'react';
import {Form, Input} from "antd";

export function FirstName() {
    const [setFirstName] = useState('');

    return (
        <>
            <Form.Item
                label="Имя"
                name="firstName"
                rules={[
                    {
                        required: true,
                        message: 'Вы не ввели имя!',
                    },
                ]}
            >
                <Input
                    placeholder="Введите имя"
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Form.Item>
        </>
    );
}