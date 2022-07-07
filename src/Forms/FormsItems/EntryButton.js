import React from 'react';

import { Button, Form } from "antd";
import {useNavigate} from "react-router";

export function EntryButton({ login, password }) {
    const navigate = useNavigate();

    let entryHandler = () => {
        if (login === 'admin' && password === 'admin') {
            return navigate(`/adminMainPage`);
        }
        if(login === 'user' && password === 'user') {
            return navigate('/userMainPage');
        }
    }

    return (
        <Form.Item wrapperCol={{offset: 11, span: 4,}}>
            <br />
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={entryHandler}>
                Войти
            </Button>
        </Form.Item>
    );
}