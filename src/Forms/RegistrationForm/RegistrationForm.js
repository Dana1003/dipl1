import React, { useState, useEffect } from 'react';

import { Form } from "antd";

import {Login} from "../FormsItems/Login";
import {Password} from "../FormsItems/Password";
import {ConfirmPassword} from "../FormsItems/ConfirmPassword";
import {RegistrationButton} from "../FormsItems/RegistrationButton";

import './RegistrationForm.scss';

export function RegistrationForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
        console.log(user)
    }, [user]);

    const handlerLoginChange = (login) => {
        setLogin(login)
    }
    const handlerPasswordChange = (password) => {
        setPassword(password)
    }
    const handlerConfirmPasswordChange = (confirmPassword) => {
        setConfirmPassword(confirmPassword)
    }

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
                <Login onChange={handlerLoginChange}/>
                <Password onChange={handlerPasswordChange}/>
                <ConfirmPassword onChange={handlerConfirmPasswordChange}/>
                <RegistrationButton login={login} password={password} confirmPassword={confirmPassword}/>
            </Form>
        </div>
    );
}
