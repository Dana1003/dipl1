import React from 'react';
import { LastName } from "../FormsItems/LastName";
import { FirstName } from "../FormsItems/FirstName";
import { Patronymic } from "../FormsItems/Patronymic";
import { Login } from "../FormsItems/Login";
import { WorkExperience } from "../FormsItems/WorkExperience";
import { Phone } from "../FormsItems/Phone";

import { Form } from "antd";

export function EditManagerDetailsForm({manager, setManager}) {
    let dividedManager = [];
    for (let field in manager)
        dividedManager.push({
            name: [`${field}`],
            value: manager[field]
        })
    return (
        <Form
            fields={dividedManager}
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
            <LastName onChange={(e) => {
                setManager(pre => {
                    return {...pre, lastName: e.target.value}
                })
            }}/>
            <FirstName onChange={(e) => {
                setManager(pre => {
                    return {...pre, firstName: e.target.value}
                })
            }}/>
            <Patronymic onChange={(e) => {
                setManager(pre => {
                    return {...pre, patronymic: e.target.value}
                })
            }}/>
            <Login onChange={(e) => {
                setManager(pre => {
                    return {...pre, login: e.target.value}
                })
            }}/>
            <WorkExperience onChange={(e) => {
                setManager(pre => {
                    return {...pre, experience: e}
                })
            }}/>
            <Phone onChange={(e) => {
                setManager(pre => {
                    return {...pre, phoneNumber: e.target.value}
                })
            }}/>
        </Form>
    );
}