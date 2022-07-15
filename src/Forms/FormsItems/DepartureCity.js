import React from 'react';

import { Form, Select } from "antd";
const { Option } = Select;

export function DepartureCity({onChange, value}) {
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
                value={value}
                showSearch
                placeholder="Выберите город прибытия"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
            >
                <Option value="Минск">Минск</Option>
                <Option value="Гродно">Гродно</Option>
                <Option value="Могилёв">Могилёв</Option>
                <Option value="Брест">Брест</Option>
                <Option value="Гомель">Гомель</Option>
                <Option value="Витебск">Витебск</Option>
            </Select>
        </Form.Item>
    );
}