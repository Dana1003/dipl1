import React from 'react';

import { Form, Input } from "antd";
const { TextArea } = Input;

export function ReviewTextarea({onChange}) {
    return (
        <Form.Item
            label="Текст отзыва"
            name="reviewText"
            rules={[
                {
                    required: true,
                    message: 'Вы не ввели отзыв!',
                },
            ]}
        >
            <TextArea showCount
                      maxLength={500}
                      style={{
                          height: 300,
                      }}
                      placeholder="Введите свой отзыв"
                      onChange={onChange}
            />
        </Form.Item>
    );
}