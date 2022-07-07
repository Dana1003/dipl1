import React from 'react';

import {Button, Form} from "antd";

export function SaveButton() {
    return (
        <Form.Item wrapperCol={{offset: 11, span: 4,}}>
            <br/>
            <Button type="primary" htmlType="submit" className="login-form-button" /*onClick={}*/>
                Сохранить
            </Button>
        </Form.Item>
    );
}