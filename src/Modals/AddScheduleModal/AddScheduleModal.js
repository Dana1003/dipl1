import React, { useState, useEffect } from 'react';
import moment from "moment";

import { Button, DatePicker, Modal, Select, TimePicker } from 'antd';
import ManagerService from "../../service/manager";
import ManagerScheduleService from "../../service/managerSchedule";

const { RangePicker } = DatePicker;

export function AddScheduleModal({isAddingVisible, setIsAddingVisible, managersSchedule, setManagersSchedule}) {
    const [selectedValue, setSelectedValue] = useState(null)
    const [isManyDatesVisible, setIsManyDatesVisible] = useState(false)
    const [isDateVisible, setIsDateVisible] = useState(false)
    const [time, setTime] = useState(null)
    const [date, setDate] = useState(null)
    const [dateTime, setDateTime] = useState(null)
    const [managers, setManagers] = useState([])

    useEffect(() => {
        ManagerService.getManagers(setManagers)
    }, [])
    React.useEffect(() => {
    }, [managersSchedule])

    const clear = () => setSelectedValue(null)
    const onOpenManyDates = () => isManyDatesVisible || isDateVisible ? setIsManyDatesVisible(false) : setIsManyDatesVisible(true)
    const onOpenDate = () => isDateVisible || isManyDatesVisible ? setIsDateVisible(false) : setIsDateVisible(true)
    const disabledDate = (current) => {
        return current && current < moment().endOf('day')
    }
    const onChangeTime = (t) => {setTime(t)}
    const onChangeDateTime = (value) => setDateTime(value)
    const onChangeDate = (value) => setDate(value.map(x => x.toDate()))
    const addDatesAndTime = () => {
        if (date != null && time != null) {
            ManagerScheduleService.postManagerScheduleDates(setManagersSchedule, setIsManyDatesVisible, selectedValue, date, time)
        }
    }
    const addDateTime = () => {
        if (dateTime != null) {
            ManagerScheduleService.postManagerScheduleDate(dateTime, selectedValue, setManagersSchedule, setIsDateVisible)
        }
    }

    return (
        <Modal title="Добавить менеджера"
               visible={isAddingVisible}
               okText="Сохранить"
               cancelText="Закрыть"
               onOk={() => {
                   if (isManyDatesVisible)
                       addDatesAndTime();
                   else if (isDateVisible)
                       addDateTime();
                   setIsAddingVisible(false);
               }}
               onCancel={() => {
                   setIsAddingVisible(false);
               }}
        >
            <Select style={{width: 250}} value={selectedValue} onChange={setSelectedValue}>
                {
                    managers.map(currentValue => (
                        <Select.Option key={currentValue.managerId}
                                       value={currentValue.managerId}>
                            {currentValue.lastName} {currentValue.firstName} {currentValue.patronymic}
                        </Select.Option>
                    ))
                }
            </Select>
            <Button onClick={clear}>Очистить</Button>
            <Button onClick={onOpenDate}>Добавить день</Button>
            <Button onClick={onOpenManyDates}>Добавить несколько дней</Button>
            {isDateVisible && (
                <>
                    <DatePicker
                        allowClear={false}
                        disabledDate={disabledDate}
                        showTime={{
                            defaultValue: moment('00:00', 'HH:mm'),
                            format: ('HH:mm')
                        }}
                        onChange={onChangeDateTime}
                    />
                </>
            )}
            {isManyDatesVisible && (
                <>
                    <RangePicker
                        allowClear={false}
                        disabledDate={disabledDate}
                        onChange={onChangeDate}
                    />
                    <TimePicker
                        allowClear={false}
                        onChange={onChangeTime}
                        defaultValue={moment('00:00', 'HH:mm')}
                        format={('HH:mm')}
                    />
                </>
            )}
        </Modal>
    );
}