import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { Login } from "../FormsItems/Login";
import { Password } from "../FormsItems/Password";
import { ConfirmPassword } from "../FormsItems/ConfirmPassword";
import { RegistrationButton } from "../FormsItems/RegistrationButton";
import notifications from '../../notifications/notifications';

import AuthService from "../../service/auth";

import { Form } from "antd";

import './RegistrationForm.scss';

export function RegistrationForm() {
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function onRegistrationHandler() {
        if (password === confirmPassword) {
            AuthService.postUser(login, password, navigate)
        } else {
            notifications.errorNotification()
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
