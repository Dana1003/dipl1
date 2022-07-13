import React from 'react';

import { LastName } from "../FormsItems/LastName";
import { FirstName } from "../FormsItems/FirstName";
import { Patronymic } from "../FormsItems/Patronymic";
import { Login } from "../FormsItems/Login";
import { WorkExperience } from "../FormsItems/WorkExperience";
import { Phone } from "../FormsItems/Phone";

import { Form } from "antd";

export function EditManagerDetailsForm({manager, setManager}) {

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
            <LastName value={manager?.lastName}
                      onChange={(e) => {
                          setManager(pre => {
                              return {...pre, lastName: e.target.value}
                          })
                      }}/>
            <FirstName value={manager?.firstName}
                       onChange={(e) => {
                           setManager(pre => {
                               return {...pre, firstName: e.target.value}
                           })
                       }}/>
            <Patronymic value={manager?.patronymic}
                        onChange={(e) => {
                            setManager(pre => {
                                return {...pre, patronymic: e.target.value}
                            })
                        }}/>
            <Login value={manager?.login}
                   onChange={(e) => {
                       setManager(pre => {
                           return {...pre, login: e.target.value}
                       })
                   }}/>
            <WorkExperience value={manager?.experience}
                            onChange={(e) => {
                                setManager(pre => {
                                    return {...pre, experience: e.target.value}
                                })
                            }}/>
            <Phone value={manager?.phoneNumber}
                   onChange={(e) => {
                       setManager(pre => {
                           return {...pre, phoneNumber: e.target.value}
                       })
                   }}/>
        </Form>
    );
}