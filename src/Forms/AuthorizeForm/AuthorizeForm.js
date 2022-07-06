import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {Navigate, Redirect, useNavigate} from "react-router";
import {useForm} from 'react-hook-form';
import {Button, Checkbox, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';

import './AuthorizeForm.scss';
import axios from "axios";

export function AuthorizeForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState([]);

    React.useEffect(() => {
        console.log(user?.filter(x => x.login === login))
    }, [user]);

    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit} = useForm({mode: "onBlur"});

    let entryHandler = () => {
        if (login === 'admin' && password === 'admin') {
            return navigate(`/adminMainPage`);
        }
    }

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
                <Form.Item
                    label="Логин"
                    name="login"
                    rules={[
                        {
                            required: true,
                            message: 'Вы не ввели логин!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Введите логин"
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Вы не ввели пароль!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Введите пароль"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 11, span: 4,}}>
                    <br />
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={entryHandler}>
                        Войти
                    </Button>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 10, span: 4,}}>
                    Нет аккуанта? <Link to="/registration">Регистрация</Link>
                </Form.Item>

{/*                <Form.Item
                    wrapperCol={{
                        offset: 11,
                        span: 6,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>*/}
            </Form>
        </div>
    );

    /*    return (
            <div className="main-authorize">
                <h1>Вход в личный кабинет</h1>
                <form className="authorize-form" onSubmit={e => e.preventDefault()}>
                    <div className="flexbox">
                        <label htmlFor="authorizeLogin" className="labels">Логин:</label>
                        <input type="text"
                               id="authorizeLogin"
                               placeholder="Введите логин"
                               {...register("login", {
                                   required: "Поле обязательно к заполнению",
                                   minLength: {
                                       value: 5,
                                       message: "Минимум 5 символов"
                                   }
                               })}
                               onChange={(e) => setLogin(e.target.value)}/>
                    </div>
                    <div className="error">
                        {errors?.login && <p>{errors?.login?.message}</p>}
                    </div>
                    <div className="flexbox">
                        <label htmlFor="authorizePassword" className="labels">Пароль:</label>
                        <input type="password"
                               id="authorizePassword"
                               placeholder="Введите пароль"
                               {...register("password", {
                                   required: "Поле обязательно к заполнению",
                                   minLength: {
                                       value: 5,
                                       message: "Минимум 5 символов"
                                   }
                               })}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="error">
                        {errors?.password && <p>{errors?.password?.message}</p>}
                    </div>
                    <button className="entryBut transition" onClick={entryHandler}>Войти</button>
                </form>
                <p className="registration-line">
                    Нет аккаунта?
                    <Link to="/registration" className="registrationBut transition" id="registration">Регистрация</Link>
                </p>
            </div>
        );*/
}
