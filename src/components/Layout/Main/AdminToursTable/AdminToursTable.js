import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Button, Modal, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

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
            sorter: (a, b) => a.nameOfTour.localeCompare(b.nameOfTour)
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
            <EditTourDetailsModal setTours={setTours}
                                  tour={tour}
                                  setTour={setTour}
                                  setEditingModalVisibility={setEditingModalVisibility}
                                  editingModalVisibility={editingModalVisibility}
            />
        </div>
    );
}