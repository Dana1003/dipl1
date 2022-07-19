import React from 'react';

import { Form, Select } from "antd";

export function DepartureCity({onChange}) {
    return (
        <Form.Item
            label="Город прибытия"
            name="departureCity"
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Вы не выбрали город прибытия!',
                },
            ]}
        >
            <Select showSearch
                    placeholder="Выберите город прибытия"
                    optionFilterProp="children"
                    onChange={onChange}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
            >
                <Select.Option key={'Минск'} value={'Минск'}>
                    Минск
                </Select.Option>
                <Select.Option key={'Брест'} value={'Брест'}>
                    Брест
                </Select.Option>
                <Select.Option key={'Гродно'} value={'Гродно'}>
                    Гродно
                </Select.Option>
                <Select.Option key={'Витебск'} value={'Витебск'}>
                    Витебск
                </Select.Option>
                <Select.Option key={'Гомель'} value={'Гомель'}>
                    Гомель
                </Select.Option>
                <Select.Option key={'Могилев'} value={'Могилев'}>
                    Могилев
                </Select.Option>
            </Select>
        </Form.Item>
    );
}