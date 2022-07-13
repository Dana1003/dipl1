import React, {useState} from 'react';
import {Button, DatePicker, Select, Space, TimePicker} from 'antd';
import moment from "moment";
import axios from "axios";

const {RangePicker} = DatePicker;

export function AddSchedule({managers}) {
//тут лежит айдишник нужного менеджера
    const [selectedValue, setSelectedValue] = useState(null)

    const [isManyDatesVisible, setIsManyDatesVisible] = useState(false)
    const [isDateVisible, setIsDateVisible] = useState(false)

    const [time, setTime] = useState(null)
    const [date, setDate] = useState(null)
    const [dateTime, setDateTime] = useState(null)

    const clear = () => setSelectedValue(null);

    const onOpenManyDates = () => isManyDatesVisible || isDateVisible ? setIsManyDatesVisible(false) : setIsManyDatesVisible(true);
    const onOpenDate = () => isDateVisible || isManyDatesVisible ? setIsDateVisible(false) : setIsDateVisible(true);

    const disabledDate = (current) => {
        return current && current < moment().endOf('day');
    };

    const onChangeTime = (t) => {
        setTime(t);
    }

    const onChangeDateTime = (value, dateString) => setDateTime(value);

    const onChangeDate = (value, dateString) => {
        if (value != null)
            setDate(value.map(x => x.toDate()))
    }

    const addDatesAndTime = () => {
        if (date != null && time != null) {
            axios.post('https://localhost:7274/api/managerSchedule/managerSchedules', ({
                "managerId": selectedValue,
                "startDate": date[0],
                "endDate": date[1],
                "time": time.utcOffset('GMT').format()

            }))
                .then(res => {
                    alert("Расписания успешно добавлено");
                    clear();
                    setIsManyDatesVisible(false);
                });
        }
    }

    const addDateTime = () => {
        if (dateTime != null) {
            axios.post('https://localhost:7274/api/schedules', {
                "date": dateTime.utcOffset('GMT').format()
            })
                .then(res => {
                    axios.post('https://localhost:7274/api/managerSchedule', {
                        "managerId": selectedValue,
                        "scheduleId": res.data.scheduleId
                    })
                        .then(response => {
                                alert("Расписание успешно добавлено");
                                clear();
                                setIsDateVisible(false);
                            }
                        )
                });
        }
    }

    return (
        <>
            <Space direction="vertical" size={10}>
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
                        <Button onClick={addDateTime}>Добавить</Button>
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
                        <Button onClick={addDatesAndTime}>Добавить</Button>
                    </>
                )}
            </Space>
        </>
    );
}