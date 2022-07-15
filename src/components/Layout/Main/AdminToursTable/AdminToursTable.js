import React, { useState, useEffect } from 'react';

import { Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import '../AdminTables.scss';
import axios from "axios";
import {AddTourModal} from "../../../../Modals/AddTourModal/AddTourModal";

export function AdminToursTable() {
    const [tours, setTours] = useState([]);
    const [modalVisibility ,setModalVisibility] = useState(false);
    const [tour, setTour] = useState(null);

    useEffect(() => {
        axios.get('https://localhost:7274/api/tours')
            .then(res => {
                setTours(res.data);
            });
    }, []);

    useEffect(() => {
    }, [tours]);

    const columns = [
        {
            title: 'Город отправления',
            dataIndex: 'arrivalCity',
/*            sorter: (a, b) => a.lastName.length - b.lastName.length,*/
        },
        {
            title: 'Город прибытия',
            dataIndex: 'departureCity',
        },
        {
            title: 'Тип тура',
            dataIndex: 'tourType',
        },
        {
            title: 'Количество дней',
            dataIndex: 'amountOfDays',
        },
        {
            title: 'Название тура',
            dataIndex: 'nameOfTour',
/*            filters: filterExperience,
            onFilter: (value, record) => record.experience === value,
            sorter: (a, b) => a.experience - b.experience*/
        },
        {
            title: 'Действия',
            dataIndex: 'action',
            render: (value, record) => {
                return (
                    <>
                        <EditOutlined onClick={() => {
                            onEditTour(record)
                        }}
                        />
                        <DeleteOutlined style={{color: "red", marginLeft: 12}} onClick={() => {
                            onDeleteTour(record)
                        }}
                        />
                    </>
                )
            }
        },
    ];

    const onEditTour = (record) => {
        /*        setIsEditingVisible(true)
                setManager({...record})*/
    };

    const onDeleteTour = (record) => {
        /*        if (managers.length >= 1)
                    Modal.confirm({
                        title: "Нажмите 'Удалить' для удаления записи о менеджере",
                        okType: 'danger',
                        okText: "Удалить",
                        cancelText: "Отменить",
                        onOk: () => {
                            handleDelete(record.key)
                        }
                    })*/
    };

    const handleOk = (newTour) => {
        setModalVisibility(false);
        axios.post('https://localhost:7274/api/tours', newTour)
            .then(temp => {
                setTours([...tours, temp.data]);
                alert('Менеджер успешно добавлен!');
            })
            .catch(err => {
                if (err.response.status === 500) {
                    alert('Не удалось добавить менеджера!\nВнутренняя ошибка сервера!')
                }
            })
    };

    const showModal = () => {
        setModalVisibility(true);
    };

    return (
        <div className="main-block">
            <div className="add-button">
                <Button type="primary" className="add-button" onClick={showModal} style={{marginTop: 50}}>
                    Добавить тур
                </Button>
            </div>

            <div className="manager-table">
                <Table columns={columns}
                       title={() => 'Данные о турах'}
                       pagination={{pageSize: 5}}
                       dataSource={tours.map(currentValue => ({
                           key: currentValue.tourId,
                           arrivalCity: currentValue.arrivalCity,
                           departureCity: currentValue.departureCity,
                           tourType: currentValue.tourType,
                           amountOfDays: currentValue.amountOfDays,
                           nameOfTour: currentValue.nameOfTour
                       }))}/>
            </div>

            <AddTourModal modalVisibility={modalVisibility}
                          setModalVisibility={setModalVisibility}
                          setTour={setTour}
                          handleOk={handleOk}
            />

{/*            <EditManagerDetailsModal setManagers={setManagers}
                                     isEditingVisible={isEditingVisible}
                                     setIsEditingVisible={setIsEditingVisible}
                                     manager={manager}
                                     setManager={setManager}/>
            <AddManagerModal isModalVisible={isModalVisible}
                             setIsModalVisible={setIsModalVisible}
                             handleOk={handleOk}
                             setManager={setManager}/>*/}
        </div>
    );
}