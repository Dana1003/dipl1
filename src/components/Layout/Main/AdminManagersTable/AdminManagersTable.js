import React, { useState, useEffect } from 'react';
import axios from "axios";
import { EditManagerDetailsModal } from "../../../../Modals/EditManagerDetailsModal/EditManagerDetailsModal";
import { AddManagerModal } from "../../../../Modals/AddManagerModal/AddManagerModal";

import { Button, Modal, Table, notification } from 'antd';
import { DeleteOutlined, EditOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

import '../AdminTables.scss';

export function AdminManagersTable() {
    const [managers, setManagers] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditingVisible, setIsEditingVisible] = useState(false);
    const [manager, setManager] = useState(null);

    const filterData = (field) =>  [...new Set(managers.map(x => x[field]))].map( item => ({
        text: item,
        value: item
    }));

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

    useEffect(() => {
    }, [managers]);


    const onEditManager = (record) => {
        setIsEditingVisible(true)
        setManager({...record})
    };

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
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleDelete = (key) => {
        axios.delete(`https://localhost:7274/api/managers/${key}`)
            .then(temp => {
                setManagers(managers.filter((item) => item.managerId !== key));
            })
    };

    function successNotification() {
        notification.open({
            message: 'Данные успешно добавлены!',
            icon: <CheckCircleOutlined style={{color: "green"}} />
        });
    }

    function errorNotification() {
        notification.open({
            message: 'Данные не были добавлены! Что-то пошло не так!',
            icon: <CloseCircleOutlined style={{color: "red"}} />
        });
    }

    const handleOk = (managerUser) => {
        setIsModalVisible(false);
        axios.post('https://localhost:7274/api/managers/managerUser', managerUser)
             .then(temp => {
                 setManagers([...managers, temp.data]);
                 successNotification()
             })
             .catch(err => {
                 if (err.response.status === 500) {
                     errorNotification()
                 }
             })
    };

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
                           phoneNumber: currentValue.phone
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