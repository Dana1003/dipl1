import React, { useState, useEffect } from 'react';
import { EditManagerDetailsModal } from "../../../../Modals/EditManagerDetailsModal/EditManagerDetailsModal";
import { AddManagerModal } from "../../../../Modals/AddManagerModal/AddManagerModal";

import ManagerService from "../../../../service/manager";

import { Button, Modal, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import '../Tables.scss';

export function AdminManagersTable() {
    const [managers, setManagers] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isEditingVisible, setIsEditingVisible] = useState(false)
    const [manager, setManager] = useState(null)

    const filterData = (field) =>  [...new Set(managers.map(x => x[field]))].map( item => ({
        text: item,
        value: item
    }))

    const columns = [
        {
            title: 'Фамилия',
            dataIndex: 'lastName',
            sorter: (a, b) => a.lastName.localeCompare(b.lastName)
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
            title: 'Логин',
            dataIndex: 'login',
        },
        {
            title: 'Опыт работы',
            dataIndex: 'experience',
            filters: filterData('workExperience'),
            onFilter: (value, record) => record.experience === value,
            sorter: (a, b) => a.experience - b.experience
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
        },
        {
            title: 'Действия',
            dataIndex: 'action',
            render: (value, record) => {
                return (
                    <>
                        <EditOutlined onClick={() => {
                            onEditManager(record)
                        }}
                        />
                        <DeleteOutlined style={{color: "red", marginLeft: 12}} onClick={() => {
                            onDeleteManager(record)
                        }}
                        />
                    </>
                )
            }
        },
    ]

    useEffect(() => {
        ManagerService.getManagers(setManagers)
    }, [])
    useEffect(() => {
    }, [managers])

    const onEditManager = (record) => {
        setIsEditingVisible(true)
        setManager({...record})
    }
    const onDeleteManager = (record) => {
        if (managers.length >= 1)
            Modal.confirm({
                title: "Нажмите 'Удалить' для удаления записи о менеджере",
                okType: 'danger',
                okText: "Удалить",
                cancelText: "Отменить",
                onOk: () => {
                    handleDelete(record.key)
                }
            })
    }
    const showModal = () => {
        setIsModalVisible(true);
    }
    const handleDelete = (key) => {
        ManagerService.deleteManager(key, managers, setManagers)
    }
    const handleOk = (managerUser) => {
        setIsModalVisible(false);
        ManagerService.postManager(managers, setManagers, managerUser)
    }

    return (
        <div className="main-block">
            <div className="add-button">
                <Button type="primary" className="add-button" onClick={showModal} style={{marginTop: 50}}>
                    Добавить менеджера
                </Button>
            </div>

            <div className="table">
                <Table columns={columns}
                       title={() => 'Данные о менеджерах'}
                       pagination={{pageSize: 5}}
                       dataSource={managers.map(currentValue => ({
                           key: currentValue.managerId,
                           firstName: currentValue.firstName,
                           lastName: currentValue.lastName,
                           patronymic: currentValue.patronymic,
                           login: currentValue.login,
                           experience: currentValue.workExperience,
                           phone: currentValue.phone
                       }))}/>
            </div>

            <EditManagerDetailsModal setManagers={setManagers}
                                     isEditingVisible={isEditingVisible}
                                     setIsEditingVisible={setIsEditingVisible}
                                     manager={manager}
                                     setManager={setManager}/>
            <AddManagerModal isModalVisible={isModalVisible}
                             setIsModalVisible={setIsModalVisible}
                             handleOk={handleOk}
                             setManager={setManager}/>
        </div>
    );
}