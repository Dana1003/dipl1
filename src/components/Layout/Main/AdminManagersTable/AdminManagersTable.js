import React, {useState, useEffect} from 'react';
import axios from "axios";
import {AddManager} from "../../../../Forms/AddManager/AddManager";

import {Button, Input, Modal, Table, Form} from 'antd';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Login} from "../../../../Forms/FormsItems/Login";

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
    }, [managers]);

    const onEditManager = (record) => {
        setIsEditingVisible(true)
        setManager({...record})
    }

    const onDeleteManager = (record) => {
        if (managers.length >= 1)
            Modal.confirm({
                title: "Подтвердите удаление",
                okType: 'danger',
                okText: "Подтвердить",
                cancelText: "Закрыть",
                onOk: () => {
                    handleDelete(record.key)
                }
            })
    }

    const resetEditing = () => {
        setIsEditingVisible(false)
        setManager(null)
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleDelete = (key) => {
        axios.delete(`https://localhost:7274/api/managers/${key}`)
            .then(response => {
                setManagers(managers.filter((item) => item.managerId !== key));
            })
    };

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


    return (
        <>
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
                    axios.put(`https://localhost:7274/api/managers/managerUser/${manager.key}`, ({
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
                    })).then(temp => {
                        alert('Данные менеджера успешно обновлены!');
                    }).catch(err => {
                        if (err.response.status === 500) {
                            alert('Не удалось обновить менеджера!\nВнутренняя ошибка сервера!')
                        }
                    })
                    resetEditing()
                }}
            >
                <Form>
                    <Form.Item
                        label="Фамилия"
                        rules={[
                            {
                                required: true,
                                message: 'Вы не ввели фамилию!',
                            },
                        ]}
                    >
                        <Input value={manager?.lastName}
                               placeholder={'Введите фамилию'}
                               onChange={(e) => {
                                   setManager(pre => {
                                       return {...pre, lastName: e.target.value}
                                   })
                               }}
                        />
                    </Form.Item>
                    <Login value={manager?.login}
                           placeholder={'Введите логин'}
                           onChange={(e) => {
                               setManager(pre => {
                                   return {...pre, login: e.target.value}
                               })
                           }}/>
                    <Input value={manager?.firstName}
                           placeholder={'Введите имя'}
                           onChange={(e) => {
                               setManager(pre => {
                                   return {...pre, firstName: e.target.value}
                               })
                           }}
                    />
                    <Input value={manager?.patronymic}
                           placeholder={'Введите отчество'}
                           onChange={(e) => {
                               setManager(pre => {
                                   return {...pre, patronymic: e.target.value}
                               })
                           }}
                    />
                    {/*                    <Input value={manager?.login}
                           placeholder={'Введите логин'}
                           onChange={(e) => {
                               setManager(pre => {
                                   return {...pre, login: e.target.value}
                               })
                           }}
                    />*/}
                    <Input value={manager?.experience}
                           placeholder={'Введите опыт работы'}
                           onChange={(e) => {
                               setManager(pre => {
                                   return {...pre, experience: e.target.value}
                               })
                           }}
                    />
                    <Input value={manager?.phoneNumber}
                           placeholder={'Введите номер телефона'}
                           onChange={(e) => {
                               setManager(pre => {
                                   return {...pre, phoneNumber: e.target.value}
                               })
                           }}
                    />
                </Form>
            </Modal>
            <Modal title="Добавить менеджера"
                   visible={isModalVisible}
                   onOk={handleOk}
                   onCancel={handleCancel}
                   okText="Сохранить"
                   cancelText="Закрыть"
            >
                <AddManager/>
            </Modal>
        </>
    )
        ;
}