import React, { useState } from 'react';

import { Form } from 'antd';

import { Login } from "../FormsItems/Login";
import { Password } from "../FormsItems/Password";
import { EntryButton } from "../FormsItems/EntryButton";
import { RegistrationLink } from "../FormsItems/RegistrationLink";

import './AuthorizeForm.scss';

export function AuthorizeForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="main-authorize">
            <h1>Вход в личный кабинет</h1>
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
                <EntryButton login={login} password={password}/>
                <RegistrationLink />
            </Form>
        </div>
    );
}
