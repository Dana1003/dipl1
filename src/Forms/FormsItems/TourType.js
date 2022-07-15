import React from 'react';
import {Form, Select} from "antd";
const { Option } = Select;

export function TourType({onChange}) {
    return (
        <Form.Item
            label="Тип тура"
            rules={[
                {
                    required: true,
                    message: 'Вы не выбрали тип тура!',
                },
            ]}
        >
            <Select
                showSearch
                placeholder="Введите тип тура"
                optionFilterProp="children"
                onChange={onChange}
                onSearch
                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
            >
                <Option value="Экскурсионный тур">Экскурсионный тур</Option>
                <Option value="Горящий тур">Горящий тур</Option>
                <Option value="Индивидуальный тур">Индивидуальный тур</Option>
                <Option value="Пакетный тур">Пакетный тур</Option>
                <Option value="Спортивный тур">Спортивный тур</Option>
                <Option value="Речной круиз">Речной круиз</Option>
                <Option value="Горнолыжный тур">Горнолыжний тур</Option>
                <Option value="Шоп-тур">Шоп-тур</Option>
            </Select>
        </Form.Item>
    );
}