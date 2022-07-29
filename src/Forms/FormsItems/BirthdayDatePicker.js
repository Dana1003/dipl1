import React from 'react';

import { DatePicker, Form } from "antd";

export function BirthdayDatePicker({onChange, disabledDate}) {
    return (
        <Form.Item
            label="Дата рождения"
            name="bithDate"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели дату рождения!',
                },
            ]}
        >
            <DatePicker placeholder={'Введите дату рождения'}
                        onChange={onChange}
                        disabledDate={disabledDate}
            />
        </Form.Item>
    );
}