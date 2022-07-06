import {Button, Modal, Popconfirm, Table} from 'antd';
import React, { useState } from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {AddManager} from "../../../../Forms/AddManager/AddManager";

export function AdminManagersTable() {
    const [managers, setManagers] = useState([]);
    const [data, setData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [user, setUser] = useState([]);
    const [manager, setManager] = useState([]);

    const {register, formState: {errors}, handleSubmit} = useForm({mode: "onBlur"});

    const filterExperience = managers.map(value => ({
        text: value.workExperience,
        value: value.workExperience
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
            filters : filterExperience,
            onFilter: (value, record) => record.experience === value,
            sorter: (a, b) => a.experience - b.experience
        },
        {
            title: 'Телефон',
            dataIndex: 'phoneNumber',
        },
        {
            title: 'Удаление',
            dataIndex: 'delete',
            render: (_, record) =>
                managers.length >= 1 ? (
                    <Popconfirm title="Подтвердите удаление" onConfirm={() => handleDelete(record.key)}>
                        <a>Удалить</a>
                    </Popconfirm>
                ) : null,
        },
    ];

    React.useEffect(() => {
        axios.get('https://localhost:7274/api/managers')
            .then(res => {
                setManagers(res.data);
            });
    }, []);

    const handleDelete = (key) => {
        axios.delete(`https://localhost:7274/api/managers/${key}`)
            .then(response => {
                setManagers(managers.filter((item) => item.managerId !== key));
            })
    };

    //---- modal events ------------

    const handleOk = (user, workExperience) => {
        setIsModalVisible(false);

        axios.post('https://localhost:7274/api/users', user)
            .then(response => {
                setUser(response.data)
                axios.post('https://localhost:7274/api/managers', {
                    "workExperience": workExperience,
                    "userId": response.data.userId
                }).then(temp => {
                    setManagers([...managers, temp.data]);
                    alert('Менеджер успешно добавлен!');
                }).catch(err => {
                    if (err.response.status === 500) {
                        alert('Не удалось добавить менеджера!\nВнутренняя ошибка сервера!')
                    }
                })
            })
            .catch(err => {
                if (err.response.status === 500) {
                    console.log('Менеджер с такими данными уже существует!')
                }
            });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //------------------------------

    return (
        <div>
            <Button type="primary" onClick={() => setIsModalVisible(true)} style={{marginTop: 100}}>
                Добавить менеджера
            </Button>

            <div id="manager-table" style={{marginTop: 100}}>
                <Table columns={columns} dataSource={managers.map(currentValue => ({
                    key: currentValue.managerId,
                    firstName: currentValue.firstName,
                    lastName: currentValue.lastName,
                    patronymic: currentValue.patronymic,
                    login: currentValue.login,
                    experience: currentValue.workExperience,
                    phoneNumber: currentValue.phone
                }))}/>;
            </div>

            <AddManager isModalVisible={isModalVisible} saveHandler={handleOk} handleCancel={handleCancel} />
        </div>
    );
};