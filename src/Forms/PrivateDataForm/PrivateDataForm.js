import React from 'react';

import { Form } from "antd";

import { Password } from "../FormsItems/Password";
import { Login } from "../FormsItems/Login";
import { LastName } from "../FormsItems/LastName";
import { FirstName } from "../FormsItems/FirstName";
import { Patronymic } from "../FormsItems/Patronymic";
import { Phone } from "../FormsItems/Phone";
import { PassportNumber } from "../FormsItems/PassportNumber";
import { Email } from "../FormsItems/Email";
import { SaveButton } from "../FormsItems/SaveButton";

import './PrivateDataForm.scss';

export function PrivateDataForm() {
    return (
        <div className="form">
            <h1>Мой личные данные</h1>
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
                <Login />
                <Password />
                <LastName />
                <FirstName />
                <Patronymic />
                <Phone />
                <Email />
                <PassportNumber />
                <SaveButton />
            </Form>
        </div>
    );
}