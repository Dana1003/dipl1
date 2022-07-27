import React from 'react';
import {DatePicker, Form} from "antd";
import moment from "moment";

export function BirthdayDatePicker({onChange, disabledDate}) {
    return (
        <Form.Item
            label="Дата рождения"
            name="bithDay"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели дату рождения!',
                },
            ]}
        >
            <DatePicker placeholder={'Введите дату рождения'}
                        allowClear={false}
                        onChange={onChange}
                        disabledDate={disabledDate}
            />
        </Form.Item>
    );
}