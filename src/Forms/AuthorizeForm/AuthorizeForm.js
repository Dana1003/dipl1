import React, { useState } from 'react';

import { Form } from 'antd';

import { Login } from "../FormsItems/Login";
import { Password } from "../FormsItems/Password";
import { EntryButton } from "../FormsItems/EntryButton";
import { RegistrationLink } from "../FormsItems/RegistrationLink";

import './AuthorizeForm.scss';
import {useNavigate} from "react-router";

export function AuthorizeForm() {
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    let entryHandler = () => {
        if (login === 'Admin1' && password === 'Admin1') {
            return navigate(`/adminMainPage`);
        }
        if(login === 'User123' && password === 'User123') {
            return navigate('/userMainPage');
        }
    }

    return (
        <div className="main-authorize">
            <h1>Вход в личный кабинет</h1>
            <Form
                onFinish={entryHandler}
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
                <EntryButton />
                <RegistrationLink />
            </Form>
        </div>
    );
}
