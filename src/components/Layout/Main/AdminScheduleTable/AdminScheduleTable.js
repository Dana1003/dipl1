import React, {useState} from 'react';
import axios from "axios";
import moment from "moment";

import {Button, DatePicker, Modal, Table} from 'antd';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

import '../AdminManagersTable/AdminManagersTable.scss';
import {EditScheduleDetailsModal} from "../../../../Modals/EditScheduleDetailsModal/EditScheduleDetailsModal";

export function AdminScheduleTable() {
    const [managersSchedule, setManagersSchedule] = useState([]);
    const [isEditingVisible, setIsEditingVisible] = useState(false);
    const [selectedManager, setSelectedManager] = useState(null)
    const [managers, setManagers] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
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
    ];

    React.useEffect(() => {
        axios.get('https://localhost:7274/api/managerSchedule')
            .then(res => {
                setManagersSchedule(res.data);
                axios.get('https://localhost:7274/api/managers')
                    .then(res => {
                        setManagers(res.data);
                    });
            });
    }, []);
    React.useEffect(() => {
    }, [managersSchedule]);

    const getAllManagerSchedule = () => {
        axios.get('https://localhost:7274/api/managerSchedule')
            .then(res => {
                setManagersSchedule(res.data);
            });
    };
    const disabledDate = (current) => {
        return current && current < moment().endOf('day');
    };
    const onEditManagerSchedule = (record) => {
        setSelectedRow(record);
        setSelectedTime(record.date.props.value.utcOffset('GMT').format())
        setSelectedManager(record.managerId)
        setIsEditingVisible(true)
    };
    const resetEditing = () => {
        setIsEditingVisible(false)
        setSelectedTime(null);
        setSelectedManager(null);
    };

    const updateHandler = () => {
        if (selectedTime != null && selectedManager != null) {
            axios.put(`https://localhost:7274/api/schedules/${selectedRow.scheduleId}`, ({
                "date": selectedTime.utcOffset('GMT').format()
            })).then(temp => {
                axios.put(`https://localhost:7274/api/managerSchedule/${selectedRow.key}`, ({
                    "managerId": selectedManager,
                    "scheduleId": temp.data.scheduleId
                }))
                    .then(r => {
                        getAllManagerSchedule();
                        alert('Данные расписания успешно обновлены!');
                    });
            }).catch(err => {
                if (err.response.status === 500) {
                    alert('Не удалось обновить запись!\nВнутренняя ошибка сервера!')
                }
            })
        }
        resetEditing()
    }
    const deleteHandler = (key) => {
        axios.delete(`https://localhost:7274/api/managerSchedule/${key}`)
            .then(temp => {
                axios.delete(`https://localhost:7274/api/schedules/${temp.data.scheduleId}`)
                    .then(obj => {
                        getAllManagerSchedule();
                    }).catch(err => {
                    if (err.response.status === 500) {
                        alert('Не удалось удалить запись!\nВнутренняя ошибка сервера!')
                    }
                })
            }).catch(err => {
            if (err.response.status === 500) {
                alert('Не удалось удалить запись!\nВнутренняя ошибка сервера!')
            }
        })
    }

    const onDeleteManagerSchedule = (record) => {
        if (managers.length >= 1)
            Modal.confirm({
                title: "Подтвердите удаление",
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
                <Button type="primary" className="add-button" /*onClick={showModal}*/ style={{marginTop: 50}}>
                    Добавить график работы
                </Button>
            </div>

            <div className="manager-table">
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
        </div>
    );
}