import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

import './RegistrationForm.scss';


export function RegistrationForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [user, setUser] = useState({});

    useEffect(() => {
        console.log(user)
    }, [user]);

    const {register, formState: {errors}, handleSubmit} = useForm({mode: "onBlur"});

    async function registrationHandler() {
        if (password === confirmPassword) {
            axios.post('https://localhost:7274/api/users', {
                "login": login,
                "password": password,
                "role": "User"
            })
                .then(response => {
                    setUser(response.data)
                    console.log('Открыть меню пользователя')
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status === 500) {
                        console.log('Пользователь с таким логином уже существует!')
                    }
                });
        } else {
            alert('Вы ввели разные пароли!')
        }
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
                        prefix={<UserOutlined className="site-form-item-icon"/>}
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
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        placeholder="Введите пароль"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Подтвердите пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Вы не ввели пароль!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        placeholder="Введите пароль ещё раз"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 11, span: 4,}}>
                    <br/>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={registrationHandler}>
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );

    /* return (
         <main className="main-registration">
             <h1>Регистрация</h1>
             <form className="registration-form" onSubmit={e => e.preventDefault()}>
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
                     <input
                         type="password"
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
                 <div className="confirmPassword">
                     <label htmlFor="authorizePassword2" className="labels">Подтвердите пароль:</label>
                     <input
                         type="password"
                         id="authorizePassword2"
                         placeholder="Введите пароль ещё раз"
                         {...register("confPassword", {
                             required: "Поле обязательно к заполнению",
                             minLength: {
                                 value: 5,
                                 message: "Минимум 5 символов"
                             }
                         })}
                         onChange={(e) => setConfirmPassword(e.target.value)}/>
                     <div className="error">
                         {errors?.confPassword && <p>{errors?.confPassword?.message}</p>}
                     </div>
                 </div>
                 <button className="registrBut transition" onClick={registrationHandler}>Зарегистироваться</button>
             </form>
         </main>
     );*/
}
