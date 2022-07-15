import React from 'react';

import { Form, Select } from "antd";
const { Option } = Select;

export function ArrivalCity({onChange}) {
    return (
        <Form.Item
            label="Город отправления"
            rules={[
                {
                    required: true,
                    message: 'Вы не выбрали город отправления!',
                },
            ]}
        >
            <Select
                showSearch
                placeholder="Выберите город отправления"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
            >
                <Option value="Минск">Минск</Option>
                <Option value="Гомель">Гомель</Option>
                <Option value="Витебск">Витебск</Option>
            </Select>
        </Form.Item>
    );
}