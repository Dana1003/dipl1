import React, { useState, useEffect } from 'react';
import { EditHotelDetailsModal } from "../../../../Modals/EditHotelDetailsModal/EditHotelDetailsModal";
import { AddHotelModal } from "../../../../Modals/AddHotelModal/AddHotelModal";

import HotelService from "../../../../service/hotel";

import { Button, Modal, Rate, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export function AdminHotelsTable() {
    const [hotels, setHotels] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isEditingVisible, setIsEditingVisible] = useState(false)
    const [hotel, setHotel] = useState(null)

    const filter = (field) => [...new Set(hotels.map(x => x[field]))].map(value => ({
        text: value,
        value: value
    }))

    const columns = [
        {
            title: 'Название отеля',
            dataIndex: 'nameOfHotel',
            filters: filter('nameOfHotel'),
            filterSearch: true,
            onFilter: (value, record) => record.nameOfHotel.includes(value),
            sorter: (a, b) => a.nameOfHotel.length - b.nameOfHotel.length,
        },
        {
            title: 'Количество звезд',
            dataIndex: 'countOfStars',
            filters: filter('countOfStars'),
            onFilter: (value, record) => record.countOfStars === value,
            sorter: (a, b) => a.countOfStars - b.countOfStars
        },
        {
            title: 'Город',
            dataIndex: 'city',
            filters: filter('city'),
            onFilter: (value, record) => record.arrivalCity === value,
            sorter: (a, b) => a.arrivalCity.localeCompare(b.arrivalCity)
        },
        {
            title: 'Адрес',
            dataIndex: 'address',
        },
        {
            title: 'Цена за номер',
            dataIndex: 'roomCost',
            filters: filter('roomCost'),
            onFilter: (value, record) => record.roomCost === value,
            sorter: (a, b) => a.roomCost - b.roomCost
        },
        {
            title: 'Действия',
            dataIndex: 'action',
            render: (value, record) => {
                return (
                    <>
                        <EditOutlined onClick={() => {
                            onEditHotel(record)
                        }}
                        />
                        <DeleteOutlined style={{color: "red", marginLeft: 12}} onClick={() => {
                            onDeleteHotel(record)
                        }}
                        />
                    </>
                )
            }
        },
    ]

    useEffect(() => {
        HotelService.getHotels(setHotels)
    }, [])
    useEffect(() => {
    }, [hotels])

    const onEditHotel = (record) => {
        setIsEditingVisible(true)
        setHotel({...record})
    }
    const onDeleteHotel = (record) => {
        if (hotels.length >= 1)
            Modal.confirm({
                title: "Нажмите 'Удалить' для удаления записи об отеле",
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
        HotelService.deleteHotel(key, hotels, setHotels)
    }
    const handleOk = (hotelToAdd) => {
        setIsModalVisible(false);
        HotelService.postHotel(hotelToAdd, hotels, setHotels)
    }

    return (
        <div className="main-block">
            <div className="add-button">
                <Button type="primary" className="add-button" onClick={showModal} style={{marginTop: 50}}>
                    Добавить отель
                </Button>
            </div>

            <div className="table">
                <Table columns={columns}
                       title={() => 'Данные об отелях'}
                       pagination={{pageSize: 5}}
                       dataSource={hotels.map(currentValue => ({
                           key: currentValue.hotelId,
                           nameOfHotel: currentValue.nameOfHotel,
                           countOfStars:  <Rate disabled allowClear={false} value={currentValue.countOfStars}/>,
                           city: currentValue.city,
                           address: currentValue.address,
                           roomCost: currentValue.roomCost
                       }))}/>
            </div>

            <EditHotelDetailsModal setIsEditingVisible={setIsEditingVisible}
                                   setHotels={setHotels}
                                   isEditingVisible={isEditingVisible}
                                   setHotel={setHotel}
                                   hotel={hotel}
            />
            <AddHotelModal isModalVisible={isModalVisible}
                           setIsModalVisible={setIsModalVisible}
                           handleOk={handleOk}
                           setHotel={setHotel}
            />
        </div>
    );
}