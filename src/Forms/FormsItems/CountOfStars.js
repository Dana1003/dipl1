import React from 'react';

import {Form, Select} from "antd";

export function CountOfStars({onChange, value}) {
    return (
        <Form.Item
            label="Количество звезд"
            rules={[
                {
                    required: true,
                    message: 'Вы не выбрали количество звезд!',
                },
            ]}
        >
            <Select style={{width: 250}} value={value} onChange={onChange}>
                {
                    <>
                        <Select.Option key={1} value={1}>
                            1
                        </Select.Option>
                        <Select.Option key={2} value={2}>
                            2
                        </Select.Option>
                        <Select.Option key={3} value={3}>
                            3
                        </Select.Option>
                        <Select.Option key={4} value={4}>
                            4
                        </Select.Option>
                        <Select.Option key={5} value={5}>
                            5
                        </Select.Option>
                    </>
                }
            </Select>
        </Form.Item>
    );
}