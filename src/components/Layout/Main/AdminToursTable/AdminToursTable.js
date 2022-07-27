import React, { useState, useEffect } from 'react';
import { AddTourModal } from "../../../../Modals/AddTourModal/AddTourModal";
import { EditTourDetailsModal } from "../../../../Modals/EditTourDetailsModal/EditTourDetailsModal";

import TourService from "../../../../service/tour";

import { Button, Modal, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import '../Tables.scss';

export function AdminToursTable() {
    const [tours, setTours] = useState([])
    const [modalVisibility, setModalVisibility] = useState(false)
    const [editingModalVisibility, setEditingModalVisibility] = useState(false)
    const [tour, setTour] = useState(null)

    useEffect(() => {
        TourService.getTour(setTours)
    }, [])
    useEffect(() => {
    }, [tours])

    const filterData = (field) => [...new Set(tours.map(x => x[field]))].map(item => ({
        text: item,
        value: item
    }))

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
    ]

    const onEditTour = (record) => {
        setEditingModalVisibility(true)
        setTour({...record})
    }
    const handleDelete = (key) => {
        TourService.deleteTour(key, tours, setTours)
    }
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
    }
    const handleOk = (newTour) => {
        setModalVisibility(false);
        TourService.postTour(newTour, setTours, tours)
    }
    const showModal = () => {
        setModalVisibility(true);
    }

    return (
        <div className="main-block">
            <div className="add-button">
                <Button type="primary" className="add-button" onClick={showModal} style={{marginTop: 50}}>
                    Добавить тур
                </Button>
            </div>

            <div className="table">
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