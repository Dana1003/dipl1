import React from 'react';
import axios from "axios";
import { LastName } from "../FormsItems/LastName";
import { FirstName } from "../FormsItems/FirstName";
import { Patronymic } from "../FormsItems/Patronymic";
import { Login } from "../FormsItems/Login";
import { WorkExperience } from "../FormsItems/WorkExperience";
import { Phone } from "../FormsItems/Phone";
import { SaveButton } from "../FormsItems/SaveButton";

import { Form, notification } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

export function EditManagerDetailsForm({manager, setManager, setManagers, onResetEditing}) {
    let dividedManager = [];
    for (let field in manager) {
        dividedManager.push({
            name: [`${field}`],
            value: manager[field]
        })
    }

    function errorNotification() {
        notification.open({
            message: 'Что-то пошло не так!',
            icon: <CloseCircleOutlined style={{color: "red"}} />
        });
    }

    const onUpdateManager = () => {
        axios.put(`https://localhost:7274/api/managers/managerUser/${manager.key}`, ({
            managerId: manager.key,
            firstName: manager.firstName,
            lastName: manager.lastName,
            patronymic: manager.patronymic,
            login: manager.login,
            workExperience: manager.experience,
            phone: manager.phoneNumber,
            role: "Manager",
            userId: manager.key,
            password: ""
        })).then(temp => {
            axios.get('https://localhost:7274/api/managers')
                .then(res => {
                    setManagers(res.data);
                });
        }).catch(err => {
            if (err.response.status === 500) {
                errorNotification()
            }
        })
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
                    return {...pre, phoneNumber: e.target.value}
                })
            }}/>
            <SaveButton />
        </Form>
    );
}