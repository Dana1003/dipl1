import * as React from 'react';

import {useState} from "react";
import {useForm} from "react-hook-form";

import {Button, Modal, Popconfirm, Table} from 'antd';

import './AddManager.scss'

export function AddManager({isModalVisible, saveHandler, handleCancel}) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [workExperience, setWorkExperience] = useState('');

    const {register, formState: {errors}, handleSubmit} = useForm({mode: "onBlur"});

    return (
        <Modal title="Добавить менеджера"
               okText="Сохранить"
               cancelText="Закрыть"
               visible={isModalVisible}
               onOk={() => saveHandler({
                   "workExperience": workExperience,
                   "firstName": firstName,
                   "lastName": lastName,
                   "patronymic": patronymic,
                   "phone": phoneNumber,
                   "login": login,
                   "password": password,
                   "role": "Manager"
               })}
               onCancel={handleCancel}>
            <div className="main-block">
                <h1>Добавьте информацию о менеджере</h1>
                    <div className="flexbox">
                        <label htmlFor="addLastName" className="labels">Фамилия:</label>
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
                    <div className="flexbox">
                        <label htmlFor="addFirstName" className="labels">Имя:</label>
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
                    <div className="flexbox">
                        <label htmlFor="addPatronymic" className="labels">Отчество:</label>
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
                    <div className="flexbox">
                        <label htmlFor="phoneNumber" className="labels">Номер телефона:</label>
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
                    <div className="flexbox">
                        <label htmlFor="login" className="labels">Логин:</label>
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
                    <div className="flexbox">
                        <label htmlFor="password" className="labels">Пароль:</label>
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
                    <div className="flexbox">
                        <label htmlFor="WorkExperience" className="labels">Опыт работы:</label>
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
            </div>
        </Modal>
    );
};