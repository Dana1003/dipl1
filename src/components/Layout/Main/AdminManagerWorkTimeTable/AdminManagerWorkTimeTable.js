import React, { useState, useEffect } from 'react';
import moment from "moment";

import WorkTimeService from "../../../../service/workTime";

import { DatePicker, Table } from "antd";

export function AdminManagerWorkTimeTable() {
    const [workedTime, setWorkedTime] = useState([])

    useEffect(() => {
        WorkTimeService.getWorkTime(setWorkedTime)
    }, [])
    useEffect(() => {
    }, [workedTime])

    const columns = [
        {
            title: 'Фамилия',
            dataIndex: 'lastName',
            sorter: (a, b) => a.lastName.length - b.lastName.length,
        },
        {
            title: 'Имя',
            dataIndex: 'firstName',
        },
        {
            title: 'Дата входа в систему',
            dataIndex: 'startDate',
        },
        {
            title: 'Дата выхода из системы',
            dataIndex: 'endDate',
        }
    ]

    return (
        <div className="main-block">
            <div className="table">
                <Table columns={columns}
                       title={() => 'Отработанные часы'}
                       pagination={{pageSize: 5}}
                       dataSource={workedTime.map(currentValue => ({
                           key: currentValue.workedHourId,
                           managerId: currentValue.managerId,
                           firstName: currentValue.firstName,
                           lastName: currentValue.lastName,
                           startDate: <DatePicker
                               value={moment(currentValue.startDate)}
                               showTime={{
                                   defaultValue: moment((currentValue.startDate), 'HH:mm'),
                                   format: ('HH:mm')
                               }}
                               disabled={true}
                           />,
                           endDate: <DatePicker
                               value={moment(currentValue.endDate)}
                               showTime={{
                                   defaultValue: moment((currentValue.endDate), 'HH:mm'),
                                   format: ('HH:mm')
                               }}
                               disabled={true}
                           />
                       }))}/>
            </div>
        </div>
    );
}