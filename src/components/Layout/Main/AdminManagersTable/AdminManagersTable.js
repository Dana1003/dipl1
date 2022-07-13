import React, { useState, useEffect } from 'react';
import axios from "axios";

import { EditManagerDetailsModal } from "../../../../Modals/EditManagerDetailsModal/EditManagerDetailsModal";
import { AddManagerModal } from "../../../../Modals/AddManagerModal/AddManagerModal";

import { Button, Modal, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import './AdminManagersTable.scss';

export function AdminManagersTable() {
    const [managers, setManagers] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditingVisible, setIsEditingVisible] = useState(false);
    const [manager, setManager] = useState(null);

    const filterExperience = [...new Set(managers.map(x => x.workExperience))].map(value => ({
        text: value,
        value: value
    }));

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
            title: 'Логин',
            dataIndex: 'login',
        },
        {
            title: 'Опыт работы',
            dataIndex: 'experience',
            filters: filterExperience,
            onFilter: (value, record) => record.experience === value,
            sorter: (a, b) => a.experience - b.experience
        },
        {
            title: 'Телефон',
            dataIndex: 'phoneNumber',
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
    ];

    useEffect(() => {
        axios.get('https://localhost:7274/api/managers')
            .then(res => {
                setManagers(res.data);
            });
    }, []);

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
    };



    const handleDelete = (key) => {
        axios.delete(`https://localhost:7274/api/managers/${key}`)
            .then(response => {
                setManagers(managers.filter((item) => item.managerId !== key));
            })
    };

    const handleOk = (managerUser) => {
        setIsModalVisible(false);
        axios.post('https://localhost:7274/api/managers/managerUser', managerUser).then(temp => {
            setManagers([...managers, temp.data]);
            alert('Менеджер успешно добавлен!');
        }).catch(err => {
            if (err.response.status === 500) {
                alert('Не удалось добавить менеджера!\nВнутренняя ошибка сервера!')
            }
        })
    };


    return (
        <div className="main-block">
            <Button type="primary" onClick={showModal} style={{marginTop: 50}}>
                Добавить менеджера
            </Button>

            <div className="manager-table">
                <Table columns={columns}
                       pagination={{pageSize: 5}}
                       dataSource={managers.map(currentValue => ({
                           key: currentValue.managerId,
                           firstName: currentValue.firstName,
                           lastName: currentValue.lastName,
                           patronymic: currentValue.patronymic,
                           login: currentValue.login,
                           experience: currentValue.workExperience,
                           phoneNumber: currentValue.phone
                       }))}/>
            </div>

            <EditManagerDetailsModal isEditingVisible={isEditingVisible} setIsEditingVisible={setIsEditingVisible} manager={manager} setManager={setManager}/>
            <AddManagerModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} handleOk={handleOk} setManager={setManager}/>
        </div>
    );
}