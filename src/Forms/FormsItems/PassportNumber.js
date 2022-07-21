import React from 'react';

import {Form, Input} from "antd";

export function PassportNumber({onChange}) {
    return (
        <Form.Item
            label="Номер паспорта"
            name="passportNumber"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели номер паспорта!',
                },
                {
                    pattern: new RegExp("^[A-Z]{2}[0-9]{7}$"),
                    message: 'Вы ввели невалидное значение!'
                }
            ]}
        >
            <Input placeholder="Введите номер паспорта" onChange={onChange}/>
        </Form.Item>
    );
}