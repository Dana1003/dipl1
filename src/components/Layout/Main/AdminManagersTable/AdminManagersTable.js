import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { AddManager } from "../../../../Forms/AddManager/AddManager";

import { Button, Input, Modal, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

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

    const resetEditing = () =>{
        setIsEditingVisible(false)
        setManager(null)
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const onDeleteManager = (record) => {
        if(managers.length >=1)
            Modal.confirm({
                title:"Подтвердите удаление",
                okType: 'danger',
                okText: "Подтвердить",
                cancelText: "Закрыть",
                onOk : ()=>{
                    handleDelete(record.key)
                }
            })
    }


    const handleDelete = (key) => {
        axios.delete(`https://localhost:7274/api/managers/${key}`)
            .then(response => {
                setManagers(managers.filter((item) => item.managerId !== key));
                console.log()
            })
    };

    //---- modal events ------------
    //сделать эндпоинт для добавления одного большого обьекта
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

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //------------------------------

    return (
        <div>
            <Button type="primary" onClick={showModal} style={{marginTop: 100}}>
                Добавить менеджера
            </Button>

            <div id="manager-table" style={{marginTop: 100}}>
                <Table columns={columns}
                       pagination={{pageSize: 7}}
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
            <Modal
                title="Редактировать менеджера"
                visible={isEditingVisible}
                okText="Сохранить"
                cancelText="Закрыть"
                onCancel={() => {
                    resetEditing()
                }}
                onOk={() => {
                    setManagers(pre =>{
                        return pre.map(m => {
                            if(m.managerId == manager.key) {
                                let managerUser = ({
                                    managerId: manager.key,
                                    firstName: manager.firstName,
                                    lastName: manager.lastName,
                                    patronymic: manager.patronymic,
                                    login: manager.login,
                                    workExperience: manager.experience,
                                    phone: manager.phoneNumber,
                                    role: "Manager",
                                    userId: manager.key,
                                    password: ""
                                })
                                axios.put(`https://localhost:7274/api/managers/managerUser/${managerUser.managerId}`, managerUser).then(temp => {
                                    alert('Данные менеджера успешно обновлены!');
                                }).catch(err => {
                                    if (err.response.status === 500) {
                                        alert('Не удалось обновить менеджера!\nВнутренняя ошибка сервера!')
                                    }
                                })
                                return managerUser
                            }
                            else
                                return m
                        })
                    })
                    resetEditing()
                }}
            >
                <Input value={manager?.lastName}
                       onChange={(e) =>{
                           setManager(pre =>{
                               return {...pre, lastName: e.target.value}
                           })
                       }}
                />
                <Input value={manager?.firstName}
                       onChange={(e) =>{
                           setManager(pre =>{
                               return {...pre, firstName: e.target.value}
                           })
                       }}
                />
                <Input value={manager?.patronymic}
                       onChange={(e) =>{
                           setManager(pre =>{
                               return {...pre, patronymic: e.target.value}
                           })
                       }}
                />
                <Input value={manager?.login}
                       onChange={(e) =>{
                           setManager(pre =>{
                               return {...pre, login: e.target.value}
                           })
                       }}
                />
                <Input value={manager?.experience}
                       onChange={(e) =>{
                           setManager(pre =>{
                               return {...pre, experience: e.target.value}
                           })
                       }}
                />
                <Input value={manager?.phoneNumber}
                       onChange={(e) =>{
                           setManager(pre =>{
                               return {...pre, phoneNumber: e.target.value}
                           })
                       }}
                />
            </Modal>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <AddManager />
            </Modal>
        </div>
    );
}