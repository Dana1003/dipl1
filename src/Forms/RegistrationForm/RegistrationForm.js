import React, { useState } from 'react';

import { Form } from "antd";

import { Login } from "../FormsItems/Login";
import { Password } from "../FormsItems/Password";
import { ConfirmPassword } from "../FormsItems/ConfirmPassword";
import { RegistrationButton } from "../FormsItems/RegistrationButton";

import './RegistrationForm.scss';

export function RegistrationForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="main-registration">
            <h1>Регистрация</h1>
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
                <Login onChange={(login) => {setLogin(login.target.value)}}/>
                <Password onChange={(password) => {setPassword(password.target.value)}}/>
                <ConfirmPassword onChange={(confirmPassword) => {setConfirmPassword(confirmPassword.target.value)}}/>
                <RegistrationButton login={login} password={password} confirmPassword={confirmPassword}/>
            </Form>
        </div>
    );
}
