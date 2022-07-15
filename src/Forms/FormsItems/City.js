import React from 'react';

import {Form, Input, Select} from "antd";

export function City({ onChange, value }) {
    return (
        <Form.Item
            label="Название города"
            rules={[
                {
                    required: true,
                    message: 'Вы не выбрали название города!',
                },
            ]}
        >
            <Select style={{width: 250}} value={value} onChange={onChange}>
                {
                    <>
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
                    </>
                }
            </Select>
        </Form.Item>
    );
}