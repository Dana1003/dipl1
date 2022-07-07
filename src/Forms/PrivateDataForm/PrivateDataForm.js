import React, { useState } from 'react';

import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

import './PrivateDataForm.scss';
import {Password} from "../FormsItems/Password";
import {Login} from "../FormsItems/Login";

export function PrivateDataForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phone, setPhone] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="form">
            <h1>Мой личные данные</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 9,
                }}
                wrapperCol={{
                    span: 6,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >
                <Login />
                <Password />

                <Form.Item
                    label="Фамилия"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: 'Вы не ввели фамилию!',
                        },
                    ]}
                >
                    <Input
                        placeholder="Введите фамилию"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Фамилия"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: 'Вы не ввели фамилию!',
                        },
                    ]}
                >
                    <Input
                        placeholder="Введите фамилию"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Item>
            </Form>
        </div>
    );
};