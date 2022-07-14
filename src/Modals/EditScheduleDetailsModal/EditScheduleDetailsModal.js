import React from 'react';
import moment from "moment";

import { DatePicker, Modal, Select } from "antd";

export function EditScheduleDetailsModal({isEditingVisible,
                                             resetEditing,
                                             updateHandler,
                                             selectedManager,
                                             setSelectedManager,
                                             managers,
                                             disabledDate,
                                             selectedTime,
                                             setSelectedTime}) {

    const onChangeDateTime = (value) => setSelectedTime(value);

    return (
        <Modal
            title="Редактировать расписание"
            visible={isEditingVisible}
            okText="Сохранить"
            cancelText="Закрыть"
            onCancel={resetEditing}
            onOk={updateHandler}
        >
            <Select style={{width: 250}} value={selectedManager} onChange={setSelectedManager}>
                {
                    managers?.map(currentValue => (
                        <Select.Option key={currentValue.managerId} value={currentValue.managerId}>
                            {currentValue.lastName} {currentValue.firstName} {currentValue.patronymic}
                        </Select.Option>
                    ))
                }
            </Select>
            <DatePicker
                disabledDate={disabledDate}
                allowClear={false}
                value={moment(selectedTime)}
                showTime={{
                    value: moment(selectedTime),
                    format: ('HH:mm')
                }}
                onChange={onChangeDateTime}
            />
        </Modal>
    );
}