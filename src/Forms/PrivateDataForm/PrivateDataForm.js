import React, { useState } from 'react';
import { Password } from "../FormsItems/Password";
import { Login } from "../FormsItems/Login";
import { LastName } from "../FormsItems/LastName";
import { FirstName } from "../FormsItems/FirstName";
import { Patronymic } from "../FormsItems/Patronymic";
import { Phone } from "../FormsItems/Phone";
import { PassportNumber } from "../FormsItems/PassportNumber";
import { Email } from "../FormsItems/Email";
import { SaveButton } from "../FormsItems/SaveButton";
import { BirthdayDatePicker } from "../FormsItems/BirthdayDatePicker";

import { Form } from "antd";

import './PrivateDataForm.scss';

export function PrivateDataForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [birthDate, setBirthDate] = useState(null);

    return (
        <div className="form">
            <h1>Мои личные данные</h1>
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
                <Login onChange={(login) => {setLogin(login)}}/>
                <Password onChange={(password) => {setPassword(password)}}/>
                <LastName onChange={(lastName) => {setLastName(lastName)}}/>
                <FirstName onChange={(firstName) => {setFirstName(firstName)}}/>
                <Patronymic onChange={(patronymic) => {setPatronymic(patronymic)}}/>
                <Phone onChange={(phone) => {setPhone(phone)}}/>
                <BirthdayDatePicker onChange={(birthDate) => {setBirthDate(birthDate)}}/>
                <Email onChange={(email) => {setEmail(email)}}/>
                <PassportNumber onChange={(passportNumber) => {setPassportNumber(passportNumber)}}/>
                <SaveButton />
            </Form>
        </div>
    );
}