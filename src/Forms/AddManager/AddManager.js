import * as React from 'react';

import './AddManager.scss'
import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";

export function AddManager() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [workExperience, setWorkExperience] = useState('');

    const [user, setUser] = useState([]);
    const [manager, setManager] = useState([]);

    React.useEffect(() => {
        console.log(user)
        console.log(manager)
    }, []);

    const {register, formState: {errors}, handleSubmit} = useForm({mode: "onBlur"});

     function saveHandler() {
         axios.post('https://localhost:7274/api/users', {
            "firstName": firstName,
            "lastName": lastName,
            "patronymic": patronymic,
            "phone": phoneNumber,
            "login": login,
            "password": password,
            "role": "Manager"
        })
            .then(response => {
                setUser(response.data)
                console.log(response.data)
                axios.post('https://localhost:7274/api/managers', {
                    "workExperience": workExperience,
                    "userId": response.data.userId
                }).then(temp => {
                    setManager(temp.data)
                    alert('Менеджер успешно добавлен!')
                    //console.log(temp.data)
                }).catch(err => {
                    console.log(err)
                    if (err.response.status === 500) {
                        alert('Не удалось добавить менеджера!\nВнутренняя ошибка сервера!')
                        //console.log('Менеджер с таким логином уже существует!')
                    }
                })
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 500) {
                    console.log('Менеджер с таким логином уже существует!')
                }
            });
    }

    return (
        <div className="main-block">
            <form onSubmit={e => e.preventDefault()}>
                <div>
                    <label htmlFor="addLastName">Фамилия:</label>
                    <input type="text"
                           id="addLastName"
                           placeholder="Введите фамилию"
                           {...register("lastName", {
                               required: "Поле обязательно к заполнению",
                               minLength: {
                                   value: 5,
                                   message: "Минимум 5 символов"
                               }
                           })}
                           onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="error">
                    {errors?.lastName && <p>{errors?.lastName?.message}</p>}
                </div>
                <div>
                    <label htmlFor="addFirstName">Имя:</label>
                    <input type="text"
                           id="addFirstName"
                           placeholder="Введите имя"
                           {...register("firstName", {
                               required: "Поле обязательно к заполнению",
                               minLength: {
                                   value: 2,
                                   message: "Минимум 2 символов"
                               }
                           })}
                           onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="error">
                    {errors?.firstName && <p>{errors?.firstName?.message}</p>}
                </div>
                <div>
                    <label htmlFor="addPatronymic">Отчество:</label>
                    <input type="text"
                           id="addPatronymic"
                           placeholder="Введите отчество"
                           {...register("patronymic", {
                               required: "Поле обязательно к заполнению",
                               minLength: {
                                   value: 5,
                                   message: "Минимум 5 символов"
                               }
                           })}
                           onChange={(e) => setPatronymic(e.target.value)}/>
                </div>
                <div className="error">
                    {errors?.patronymic && <p>{errors?.patronymic?.message}</p>}
                </div>
                <div>
                    <label htmlFor="phoneNumber">Номер телефона:</label>
                    <input type="text"
                           id="phoneNumber"
                           placeholder="Введите номер телефона"
                           {...register("phone", {
                               required: "Поле обязательно к заполнению",
                               minLength: {
                                   value: 7,
                                   message: "Минимум 7 символов"
                               }
                           })}
                           onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>
                <div className="error">
                    {errors?.phone && <p>{errors?.phone?.message}</p>}
                </div>
                <div>
                    <label htmlFor="login">Логин:</label>
                    <input type="text"
                           id="login"
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
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
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
                <div>
                    <label htmlFor="WorkExperience">Опыт работы:</label>
                    <input
                        type="number"
                        id="WorkExperience"
                        placeholder="Введите опыт работы"
                        {...register("experience", {
                            required: "Поле обязательно к заполнению",
                            min: 0,
                            max: 50
                        })}
                        onChange={(e) => setWorkExperience(e.target.value)}/>
                </div>
                <div className="error">
                    {errors?.experience && <p>{errors?.experience?.message}</p>}
                </div>
            </form>
        </div>
    );
}