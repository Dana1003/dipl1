import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Navigate, Redirect, useNavigate} from "react-router";
import {useForm} from 'react-hook-form';

import './AuthorizeForm.scss';
import axios from "axios";

export function AuthorizeForm() {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [user, setUser] = React.useState([]);

    React.useEffect(() => {
        console.log(user?.filter(x => x.login === login))
    }, [user]);

    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit} = useForm({mode: "onBlur"});

    let entryHandler = () => {
        /* axios.get('https://localhost:7274/api/users', {
             "login": login,
             "password": password
         })
             .then(response => {
                 setUser(response.data)
                 console.log('Меню')
             })
             .catch();*/
        if (login === 'admin' && password === 'admin') {
            return navigate(`/adminMainPage`);
            // return <Navigate to="/main-page" />;
            //window.open("/main-page");
        }
    }

    return (
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
    );
};
