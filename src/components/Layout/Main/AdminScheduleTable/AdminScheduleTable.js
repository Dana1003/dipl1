import React, { useState, useEffect } from 'react';
import moment from "moment";
import { EditScheduleDetailsModal } from "../../../../Modals/EditScheduleDetailsModal/EditScheduleDetailsModal";
import { AddScheduleModal } from "../../../../Modals/AddScheduleModal/AddScheduleModal";

import ManagerScheduleService from "../../../../service/managerSchedule";

import { Button, DatePicker, Modal, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import '../Tables.scss';

export function AdminScheduleTable() {
    const [managersSchedule, setManagersSchedule] = useState([])
    const [isEditingVisible, setIsEditingVisible] = useState(false)
    const [isAddingVisible, setIsAddingVisible] = useState(false)
    const [selectedManager, setSelectedManager] = useState(null)
    const [managers, setManagers] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedRow, setSelectedRow] = useState(null)

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
            title: 'Отчество',
            dataIndex: 'patronymic',
        },
        {
            title: 'Дата',
            dataIndex: 'date',
        },
        {
            title: 'Действия',
            dataIndex: 'action',
            render: (value, record) => {
                return (
                    <>
                        <EditOutlined onClick={() => {
                            onEditManagerSchedule(record)
                        }}
                        />
                        <DeleteOutlined style={{color: "red", marginLeft: 12}} onClick={() => {
                            onDeleteManagerSchedule(record)
                        }}
                        />
                    </>
                )
            }
        },
    ]

    useEffect(() => {
        ManagerScheduleService.getManagerSchedule(setManagersSchedule, setManagers)
    }, [])
    useEffect(() => {
    }, [managersSchedule])

    const disabledDate = (current) => {
        return current && current < moment().endOf('day');
    }
    const onEditManagerSchedule = (record) => {
        setSelectedRow(record);
        setSelectedTime(record.date.props.value.utcOffset('GMT').format())
        setSelectedManager(record.managerId)
        setIsEditingVisible(true)
    }
    const resetEditing = () => {
        setIsEditingVisible(false)
        setSelectedTime(null);
        setSelectedManager(null);
    }
    const updateHandler = () => {
        if (selectedTime != null && selectedManager != null) {
            ManagerScheduleService.putManagerSchedule(selectedRow, selectedTime, selectedManager, setManagersSchedule)
        }
        resetEditing()
    }
    const showModal = () => setIsAddingVisible(true)
    const deleteHandler = (key) => {
        ManagerScheduleService.deleteManagerSchedule(key, setManagersSchedule)
    }
    const onDeleteManagerSchedule = (record) => {
        if (managers.length >= 1)
            Modal.confirm({
                title: "Нажмите 'Удалить' для удаления записи о графике работы",
                okType: 'danger',
                okText: "Подтвердить",
                cancelText: "Закрыть",
                onOk: () => {
                    deleteHandler(record.key)
                }
            })
    }

    return (
        <div className="main-block">
            <div className="add-button">
                <Button type="primary" className="add-button" onClick={showModal} style={{marginTop: 50}}>
                    Добавить график работы
                </Button>
            </div>

            <div className="table">
                <Table columns={columns}
                       title={() => 'График работы'}
                       pagination={{pageSize: 5}}
                       dataSource={managersSchedule.map(currentValue => ({
                           key: currentValue.managerScheduleId,
                           managerId: currentValue.managerId,
                           firstName: currentValue.firstName,
                           lastName: currentValue.lastName,
                           patronymic: currentValue.patronymic,
                           scheduleId: currentValue.scheduleId,
                           date: <DatePicker
                               value={moment(currentValue.date)}
                               showTime={{
                                   defaultValue: moment((currentValue.date), 'HH:mm'),
                                   format: ('HH:mm')
                               }}
                               disabled={true}
                           />

                       }))}/>
            </div>

            <EditScheduleDetailsModal isEditingVisible={isEditingVisible}
                                      resetEditing={resetEditing}
                                      updateHandler={updateHandler}
                                      selectedManager={selectedManager}
                                      setSelectedManager={setSelectedManager}
                                      managers={managers}
                                      disabledDate={disabledDate}
                                      selectedTime={selectedTime}
                                      setSelectedTime={setSelectedTime}
            />
            <AddScheduleModal setManagersSchedule={setManagersSchedule}
                              isAddingVisible={isAddingVisible}
                              setIsAddingVisible={setIsAddingVisible}
                              managersSchedule={managersSchedule}
            />
        </div>
    );
}