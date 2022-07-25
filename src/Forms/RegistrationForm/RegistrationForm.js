import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router";
import { Login } from "../FormsItems/Login";
import { Password } from "../FormsItems/Password";
import { ConfirmPassword } from "../FormsItems/ConfirmPassword";
import { RegistrationButton } from "../FormsItems/RegistrationButton";

import { Form, notification } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

import './RegistrationForm.scss';

export function RegistrationForm() {
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function errorNotification() {
        notification.open({
            message: 'Вы ввели разные пароли!',
            icon: <CloseCircleOutlined
                style={{color: "red"}} />
        });
    }

    async function onRegistrationHandler() {
        if (password === confirmPassword) {
            axios.post('https://localhost:7274/api/users', {
                "login": login,
                "password": password,
                "role": "User"
            })
                .then(temp => {
                    return navigate('/userMainPage');
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status === 500) {
                        console.log('Пользователь с таким логином уже существует!')
                    }
                });
        } else {
            errorNotification()
        }
    }

    return (
        <div className="main-registration">
            <h1>Регистрация</h1>
            <Form
                onFinish={onRegistrationHandler}
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
                <Login onChange={(login) => {setLogin(login.target.value)}}/>
                <Password onChange={(password) => {setPassword(password.target.value)}}/>
                <ConfirmPassword onChange={(confirmPassword) => {setConfirmPassword(confirmPassword.target.value)}}/>
                <RegistrationButton login={login} password={password} confirmPassword={confirmPassword}/>
            </Form>
        </div>
    );
}
