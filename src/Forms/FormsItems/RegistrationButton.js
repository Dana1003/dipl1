import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router";

import {Button, Form, notification} from "antd";
import { CloseCircleOutlined } from '@ant-design/icons';

export function RegistrationButton({login, password, confirmPassword}) {
    const navigate = useNavigate();

    function errorNotification() {
        notification.open({
            message: 'Вы ввели разные пароли!',
            icon: <CloseCircleOutlined style={{color: "red"}} />
        });
    }

    async function registrationHandler() {
        if (password === confirmPassword) {
            axios.post('https://localhost:7274/api/users', {
                "login": login,
                "password": password,
                "role": "User"
            })
                .then(response => {
                    return navigate('/userMainPage');
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status === 500) {
                        console.log('Пользователь с таким логином уже существует!')
                    }
                });
        } else {
            errorNotification()
        }
    }

    return (
        <Form.Item wrapperCol={{offset: 11, span: 4,}}>
            <br/>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={registrationHandler}>
                Зарегистрироваться
            </Button>
        </Form.Item>
    );
}