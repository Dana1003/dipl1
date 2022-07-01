import React from 'react';
import './RegistrationForm.scss';
import {useForm} from "react-hook-form";
import auth from "../../service/auth";
import $api from '../../http';
import axios from 'axios';
import AuthService from "../../service/auth";


export function RegistrationForm() {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const [user, setUser] = React.useState({});

    React.useEffect(() => {
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
    );
};