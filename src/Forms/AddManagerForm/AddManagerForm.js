import React from 'react';
import { LastName } from "../FormsItems/LastName";
import { FirstName } from "../FormsItems/FirstName";
import { Patronymic } from "../FormsItems/Patronymic";
import { Login } from "../FormsItems/Login";
import { WorkExperience } from "../FormsItems/WorkExperience";
import { Phone } from "../FormsItems/Phone";
import { Password } from "../FormsItems/Password";

import { Form } from "antd";

export function AddManagerForm({onChangeLogin, onChangePassword, onChangeLastName, onChangeFirstName, onChangePatronymic, onChangePhoneNumber, onChangeWorkExperience}) {

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 14,
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >
            <LastName onChange={(e) => {onChangeLastName(e.target.value)}}/>
            <FirstName onChange={(e) => {onChangeFirstName(e.target.value)}}/>
            <Patronymic onChange={(e) => {onChangePatronymic(e.target.value)}}/>
            <Phone onChange={(e) => {onChangePhoneNumber(e.target.value)}}/>
            <Login onChange={(e) => {onChangeLogin(e.target.value)}}/>
            <Password onChange={(e) => {onChangePassword(e.target.value)}}/>
            <WorkExperience onChange={(e) => {onChangeWorkExperience(e)}}/>
        </Form>
    );
}