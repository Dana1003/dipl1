import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Button, Modal, Table, notification } from "antd";
import { DeleteOutlined, EditOutlined, CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

import { AddTourModal } from "../../../../Modals/AddTourModal/AddTourModal";
import { EditTourDetailsModal } from "../../../../Modals/EditTourDetailsModal/EditTourDetailsModal";

import '../AdminTables.scss';

export function AdminToursTable() {
    const [tours, setTours] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [editingModalVisibility, setEditingModalVisibility] = useState(false);
    const [tour, setTour] = useState(null);

    useEffect(() => {
        axios.get('https://localhost:7274/api/tours')
            .then(res => {
                setTours(res.data);
            });
    }, []);

    useEffect(() => {
    }, [tours]);

    const filterData = (field) => [...new Set(tours.map(x => x[field]))].map(item => ({
        text: item,
        value: item
    }));

    const columns = [
        {
            title: 'Город отправления',
            dataIndex: 'arrivalCity',
            filters: filterData('arrivalCity'),
            onFilter: (value, record) => record.arrivalCity === value,
            sorter: (a, b) => a.arrivalCity.localeCompare(b.arrivalCity)
        },
        {
            title: 'Город прибытия',
            dataIndex: 'departureCity',
            filters: filterData('departureCity'),
            onFilter: (value, record) => record.departureCity === value,
            sorter: (a, b) => a.departureCity.localeCompare(b.departureCity)
        },
        {
            title: 'Тип тура',
            dataIndex: 'tourType',
            filterSearch: true,
            filters: filterData('tourType'),
            onFilter: (value, record) => record.tourType === value,
            sorter: (a, b) => a.tourType.localeCompare(b.tourType)
        },
        {
            title: 'Количество дней',
            dataIndex: 'amountOfDays',
            filters: filterData('amountOfDays'),
            onFilter: (value, record) => record.amountOfDays === value,
            sorter: (a, b) => a.amountOfDays - b.amountOfDays,
        },
        {
            title: 'Название тура',
            dataIndex: 'nameOfTour',
            filterSearch: true,
            filters: filterData('nameOfTour'),
            onFilter: (value, record) => record.nameOfTour === value,
            sorter: (a, b) => a.nameOfTour.localeCompare(b.nameOfTour)
        },
        {
            title: 'Цена тура',
            dataIndex: 'tourCost',
            filterSearch: true,
            filters: filterData('tourCost'),
            onFilter: (value, record) => record.tourCost === value,
            sorter: (a, b) => a.tourCost - b.tourCost,
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
        setEditingModalVisibility(true)
        setTour({...record})
    };

    const handleDelete = (key) => {
        axios.delete(`https://localhost:7274/api/tours/${key}`)
            .then(response => {
                setTours(tours.filter((item) => item.tourId !== key));
            })
    };

    const onDeleteTour = (record) => {
        if (tours.length >= 1)
            Modal.confirm({
                title: "Нажмите 'Удалить' для удаления записи о туре",
                okType: 'danger',
                okText: "Удалить",
                cancelText: "Отменить",
                onOk: () => {
                    handleDelete(record.key)
                }
            })
    };

    function errorNotification() {
        notification.open({
            message: 'Что-то пошло не так!',
            icon: <CloseCircleOutlined style={{color: "red"}} />
        });
    }

    function successNotification() {
        notification.open({
            message: 'Данные успешно добавлены!',
            icon: <CheckCircleOutlined style={{color: "green"}} />
        });
    }

    const handleOk = (newTour) => {
        setModalVisibility(false);
        axios.post('https://localhost:7274/api/tours', newTour)
            .then(temp => {
                setTours([...tours, temp.data]);
                successNotification()
            })
            .catch(err => {
                if (err.response.status === 500) {
                    errorNotification()
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
                           nameOfTour: currentValue.nameOfTour,
                           tourCost: currentValue.tourCost
                       }))}/>
            </div>

            <AddTourModal modalVisibility={modalVisibility}
                          setModalVisibility={setModalVisibility}
                          setTour={setTour}
                          handleOk={handleOk}
            />
            <EditTourDetailsModal setTours={setTours}
                                  tour={tour}
                                  setTour={setTour}
                                  setEditingModalVisibility={setEditingModalVisibility}
                                  editingModalVisibility={editingModalVisibility}
            />
        </div>
    );
}