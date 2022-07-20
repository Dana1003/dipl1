import React from 'react';
import moment from "moment";

import { DatePicker, Form } from "antd";

export function TravelStartDate({onChange, disabledDate}) {
    return (
        <Form.Item
            label="Дата начала поездки"
            name="departureDate"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели дату начала поездки!',
                },
            ]}
        >
            <DatePicker placeholder={'Выберете дату начала поездки'}
                        allowClear={false}
                        disabledDate={disabledDate}
                        showTime={{
                            defaultValue: moment('00:00', 'HH:mm'),
                            format: ('HH:mm')
                        }}
                        onChange={onChange}
            />
        </Form.Item>
    );
}