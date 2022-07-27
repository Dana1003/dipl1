import React, { useState,useEffect } from 'react';
import { AddTicketFromFavourite } from "../../../../Modals/AddTicketFromFavourite/AddTicketFromFavourite";

import TicketService from "../../../../service/ticket";

import { Modal, Rate, Table } from "antd";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";

export function UserViewSelected() {
    const [tickets, setTickets] = useState([])
    const [ticket, setTicket] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        TicketService.getFavouriteByClientId(setTickets)
    }, [])
    useEffect(() => {
    }, [tickets])

    const filter = (field) => [...new Set(tickets.map(x => x[field]))].map(value => ({
        text: value,
        value: value
    }))

    const columns = [
        {
            title: 'Город прибытия',
            dataIndex: 'arrivalCity',
            filters: filter('arrivalCity'),
            onFilter: (value, record) => record.arrivalCity === value,
            sorter: (a, b) => a.arrivalCity.localeCompare(b.arrivalCity)
        },
        {
            title: 'Город отправления',
            dataIndex: 'departureCity',
            filters: filter('departureCity'),
            onFilter: (value, record) => record.departureCity === value,
            sorter: (a, b) => a.departureCity.localeCompare(b.departureCity)
        },
        {
            title: 'Название тура',
            dataIndex: 'nameOfTour',
            filterSearch: true,
            filters: filter('nameOfTour'),
            onFilter: (value, record) => record.nameOfTour === value,
            sorter: (a, b) => a.nameOfTour.localeCompare(b.nameOfTour)
        },
        {
            title: 'Цена тура',
            dataIndex: 'tourCost',
            filters: filter('tourCost'),
            onFilter: (value, record) => record.tourCost === value,
            sorter: (a, b) => a.tourCost - b.tourCost,
        },
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
                        <PlusCircleOutlined style={{color: "green"}} onClick={() => {
                            showModal(record);
                        }}
                        />
                        <DeleteOutlined style={{color: "red", marginLeft: 12}} onClick={() => {
                            onDeleteFavouriteTicket(record)
                        }}
                        />
                    </>
                )
            }
        },
    ]

    const showModal = (record) =>{
        setTicket(record);
        setIsModalVisible(true);
    }
    const onDeleteFavouriteTicket = (record) =>{
        if (tickets.length >= 1)
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
    const handleDelete = (key) => {
        TicketService.deleteTicket(key, setTickets, tickets)
    }
    const handleOk = (ticketToAdd) => {
        setIsModalVisible(false)
       TicketService.putTicket(ticketToAdd, ticket, setTickets)
    }

    return (
        <div className="main-block">
            <div className="table">
                <Table columns={columns}
                       title={() => 'Избранные туры и отели'}
                       pagination={{pageSize: 5}}
                       dataSource={tickets.map(currentValue => ({
                           key: currentValue.ticketId,
                           clientId:currentValue.clientId,
                           tourHotelId:currentValue.tourHotelId,
                           arrivalCity: currentValue.arrivalCity,
                           departureCity: currentValue.departureCity,
                           nameOfTour: currentValue.nameOfTour,
                           tourCost: currentValue.tourCost,
                           nameOfHotel: currentValue.nameOfHotel,
                           countOfStars: <Rate allowClear={false} value={currentValue.countOfStars}/>,
                           roomCost: currentValue.roomCost
                       }))}/>
            </div>
            <AddTicketFromFavourite handleOk={handleOk}
                                    setTicket={setTicket}
                                    setIsModalVisible={setIsModalVisible}
                                    isModalVisible={isModalVisible}
                                    ticket={ticket}
            />
        </div>
    );
}