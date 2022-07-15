import React from 'react';

import { Form, Select } from "antd";
const { Option } = Select;

export function DepartureCity({onChange}) {
    return (
        <Form.Item
            label="Город прибытия"
            rules={[
                {
                    required: true,
                    message: 'Вы не выбрали город прибытия!',
                },
            ]}
        >
            <Select
                showSearch
                placeholder="Выберите город прибытия"
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