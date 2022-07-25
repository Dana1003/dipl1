import React, { useState, useEffect } from 'react';
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

import {DatePicker, Form} from "antd";

import './PrivateDataForm.scss';
import axios from "axios";
import moment from "moment";

export function PrivateDataForm() {
    const [client, setClient] = useState(null);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [birthDate, setBirthDate] = useState(null);

    useEffect(() => {
        axios.get(`https://localhost:7274/api/clients/${1}`)
            .then(res => {
                setClient(res.data)

                setLogin(res.data.login);
                setPassword(res.data.password)
                setLastName(res.data.lastName)
                setFirstName(res.data.firstName)
                setPatronymic(res.data.patronymic)
                setPhone(res.data.phone)
                setEmail(res.data.email)
                setPassportNumber(res.data.passportNumber)
                setBirthDate(moment(res.data.bithDate))
            });
    }, []);

    const onUpdateClientData = () =>{

    }

    let clientData = [];
    for (let field in client) {
        clientData.push({
            name: [`${field}`],
            value: client[field]
        })
    }

    console.log(clientData)

    return (
        <div className="form">
            <h1>Мои личные данные</h1>
            <Form
                onFinish={onUpdateClientData}
                fields={clientData}
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
                <DatePicker
                    required={true}
                    allowClear={false}
                    value={moment(birthDate)}
                    showTime={{
                        value: moment(birthDate),
                        format: ('HH:mm')
                    }}
                    onChange={(value)=>{
                        setBirthDate(value)
                    }}
                />
                <Email onChange={(email) => {setEmail(email)}}/>
                <PassportNumber onChange={(passportNumber) => {setPassportNumber(passportNumber)}}/>
                <SaveButton />
            </Form>
        </div>
    );
}