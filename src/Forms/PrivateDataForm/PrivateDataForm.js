import React, { useState, useEffect } from 'react';
import axios from "axios";
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

import { Form, notification } from "antd";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

import './PrivateDataForm.scss';

export function PrivateDataForm() {
    const [client, setClient] = useState('');

    useEffect(() => {
        axios.get(`https://localhost:7274/api/clients/${5}`)
            .then(res => {
                setClient(res.data)
            });
    }, []);

    useEffect(() => {
    }, [client])

    function errorNotification() {
        notification.open({
            message: 'Ошибка изменения личных данных!',
            icon: <CloseCircleOutlined style={{color: "red"}}/>
        });
    }

    function successNotification() {
        notification.open({
            message: 'Данные успешно изменены!',
            icon: <CheckCircleOutlined style={{color: "green"}}/>
        });
    }

    const onUpdateClientData = () => {
        axios.put(`https://localhost:7274/api/clients/clientUser/${client.clientId}`, ({
            clientId: client.clientId,
            passportNumber: client.passportNumber,
            email: client.email,
            bithDate: moment(client.bithDate).utcOffset('GMT').format(),
            userId: client.userId,
            firstName: client.firstName,
            lastName: client.lastName,
            patronymic: client.patronymic,
            phone: client.phone,
            login: client.login,
            password: client.password,
            role: "User"
        })).then(temp => {
            axios.get(`https://localhost:7274/api/clients/${client.clientId}`)
                .then(res => {
                    setClient(res.data);
                    successNotification()
                });
        }).catch(err => {
            if (err.response.status === 500) {
                errorNotification()
            }
        })
    }

    let clientData = [];
    for (let field in client) {
        clientData.push({
            name: [`${field}`],
            value: client[field]
        })
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
                }}/>
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