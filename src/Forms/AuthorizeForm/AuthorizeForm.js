import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { Login } from "../FormsItems/Login";
import { Password } from "../FormsItems/Password";
import { EntryButton } from "../FormsItems/EntryButton";
import { RegistrationLink } from "../FormsItems/RegistrationLink";

import { Form } from 'antd';

import './AuthorizeForm.scss';

export function AuthorizeForm() {
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    let entryHandler = () => {
        if (login === 'Admin1' && password === 'Admin1') {
            return navigate(`/adminMainPage`, { state: { managerId:1 } });
        }
        if(login === 'User123' && password === 'User123') {
            return navigate('/userMainPage');
        }
        if(login === 'Manager' && password === 'Manager') {
            return navigate('/managerMainPage');
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
