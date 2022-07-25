import React, {useState,useEffect} from 'react';
import {CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons";
import axios from "axios";
import {Modal, notification, Rate, Table} from "antd";
import {AddTicketFromFavourite} from "../../../../Modals/AddTicketFromFavourite/AddTicketFromFavourite";

export function UserViewSelected() {
    const [tickets, setTickets] = useState([]);
    const [ticket, setTicket] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const filter = (field) => [...new Set(tickets.map(x => x[field]))].map(value => ({
        text: value,
        value: value
    }));

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
    ];

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
        axios.delete(`https://localhost:7274/api/tickets/${key}`)
            .then(response => {
                setTickets(tickets.filter((item) => item.ticketId !== key));
            })
    };

    useEffect(() => {
        axios.get(`https://localhost:7274/api/favouriteTickets?clientId=${1}`)
            .then(res => {
                setTickets(res.data);
            });
    }, []);

    useEffect(() => {
    }, [tickets]);

    function errorNotification() {
        notification.open({
            message: 'Что-то пошло не так!',
            icon: <CloseCircleOutlined style={{color: "red"}} />
        });
    }

    function successNotification() {
        notification.open({
            message: 'Билет успешно забронирован!',
            icon: <CheckCircleOutlined style={{color: "green"}} />
        });
    }


    const handleOk = (ticketToAdd) => {
        setIsModalVisible(false);
        axios.put(`https://localhost:7274/api/tickets/${ticket.key}`, ticketToAdd)
            .then(temp => {
                successNotification()
                axios.get(`https://localhost:7274/api/favouriteTickets?clientId=${1}`)
                    .then(res => {
                        setTickets(res.data);
                    });
            })
            .catch(err => {
                if (err.response.status === 500) {
                    errorNotification();
                }
            })
    };

    return (
        <>
            <div className="manager-table">
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
        </>
    );
}