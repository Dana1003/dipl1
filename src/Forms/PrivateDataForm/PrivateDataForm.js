import React, { useState, useEffect } from 'react';
import moment from "moment";
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

import ClientService from "../../service/client";

import { Form } from "antd";

import './PrivateDataForm.scss';

export function PrivateDataForm() {
    const [client, setClient] = useState('')

    let clientData = [];
    for (let field in client) {
        clientData.push({
            name: [`${field}`],
            value: client[field]
        })
    }

    useEffect(() => {
        ClientService.getClient(setClient)
    }, [])
    useEffect(() => {
    }, [client])

    const disabledDate = (current) => {
        return current && current > moment().endOf('day');
    }
    const onUpdateClientData = () => {
       ClientService.putClient(client, setClient)
    }

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
                <Login onChange={(e) => {
                    setClient(pre => {
                        return {...pre, login: e.target.value}
                    })
                }}/>
                <Password onChange={(e) => {
                    setClient(pre => {
                        return {...pre, password: e.target.value}
                    })
                }}/>
                <LastName onChange={(e) => {
                    setClient(pre => {
                        return {...pre, lastName: e.target.value}
                    })
                }}/>
                <FirstName onChange={(e) => {
                    setClient(pre => {
                        return {...pre, firstName: e.target.value}
                    })
                }}/>
                <Patronymic onChange={(e) => {
                    setClient(pre => {
                        return {...pre, patronymic: e.target.value}
                    })
                }}/>
                <Phone onChange={(e) => {
                    setClient(pre => {
                        return {...pre, phone: e.target.value}
                    })
                }}/>
                <BirthdayDatePicker onChange={(e) => {
                  setClient(pre => {
                      return {...pre, bithDate: e}
                  })
                }} disabledDate={disabledDate}/>
                <Email onChange={(e) => {
                    setClient(pre => {
                        return {...pre, email: e.target.value}
                    })
                }}/>
                <PassportNumber onChange={(e) => {
                    setClient(pre => {
                        return {...pre, passportNumber: e.target.value}
                    })
                }}/>
                <SaveButton/>
            </Form>
        </div>
    );
}