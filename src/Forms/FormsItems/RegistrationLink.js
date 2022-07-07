import React from 'react';
import { Link } from "react-router-dom";

import { Form } from "antd";

export function RegistrationLink() {
    return (
        <Form.Item wrapperCol={{offset: 10, span: 4,}}>
            Нет аккуанта? <Link to="/registration">Регистрация</Link>
        </Form.Item>
    );
}