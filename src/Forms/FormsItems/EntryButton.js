import React from 'react';

import { Button, Form } from "antd";

export function EntryButton() {
    return (
        <Form.Item wrapperCol={{offset: 11, span: 4,}}>
            <br />
            <Button type="primary" htmlType="submit">
                Войти
            </Button>
        </Form.Item>
    );
}