import React from 'react';

import { Button, Form } from "antd";

export function RegistrationButton() {
    return (
        <Form.Item wrapperCol={{offset: 10, span: 4,}}>
            <br/>
            <Button type="primary" htmlType="submit">
                Зарегистрироваться
            </Button>
        </Form.Item>
    );
}