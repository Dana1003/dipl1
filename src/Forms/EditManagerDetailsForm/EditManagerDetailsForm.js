import React from 'react';
import { LastName } from "../FormsItems/LastName";
import { FirstName } from "../FormsItems/FirstName";
import { Patronymic } from "../FormsItems/Patronymic";
import { Login } from "../FormsItems/Login";
import { WorkExperience } from "../FormsItems/WorkExperience";
import { Phone } from "../FormsItems/Phone";
import { SaveButton } from "../FormsItems/SaveButton";

import ManagerService from "../../service/manager";

import { Form } from "antd";

export function EditManagerDetailsForm({manager, setManager, setManagers, onResetEditing}) {
    let dividedManager = [];
    for (let field in manager) {
        dividedManager.push({
            name: [`${field}`],
            value: manager[field]
        })
    }

    const onUpdateManager = () => {
        ManagerService.putManager(manager, setManagers)
        onResetEditing();
    }

    return (
        <Form
            onFinish={onUpdateManager}
            fields={dividedManager}
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
                    return {...pre, phone: e.target.value}
                })
            }}/>
            <SaveButton />
        </Form>
    );
}