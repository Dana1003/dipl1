import React, { useState } from 'react';
import { LastName } from "../FormsItems/LastName";
import { FirstName } from "../FormsItems/FirstName";
import { Patronymic } from "../FormsItems/Patronymic";
import { Login } from "../FormsItems/Login";
import { WorkExperience } from "../FormsItems/WorkExperience";
import { Phone } from "../FormsItems/Phone";
import { Password } from "../FormsItems/Password";
import { SaveButton } from "../FormsItems/SaveButton";

import { Form } from "antd";

export function AddManagerForm({handleOk}) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [workExperience, setWorkExperience] = useState('')

    return (
        <Form
            onFinish={()=>handleOk({
                "workExperience": workExperience,
                "firstName": firstName,
                "lastName": lastName,
                "patronymic": patronymic,
                "phone": phoneNumber,
                "login": login,
                "password": password,
                "role": "Manager"
            })}
            name="basic"
            labelCol={{
                span: 7,
            }}
            wrapperCol={{
                span: 14,
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >
            <LastName onChange={(e) => {setLastName(e.target.value)}}/>
            <FirstName onChange={(e) => {setFirstName(e.target.value)}}/>
            <Patronymic onChange={(e) => {setPatronymic(e.target.value)}}/>
            <Phone onChange={(e) => {setPhoneNumber(e.target.value)}}/>
            <Login onChange={(e) => {setLogin(e.target.value)}}/>
            <Password onChange={(e) => {setPassword(e.target.value)}}/>
            <WorkExperience onChange={(e) => {setWorkExperience(e)}}/>
            <SaveButton />
        </Form>
    );
}