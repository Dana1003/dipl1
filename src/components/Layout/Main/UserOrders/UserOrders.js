import React, {useState, useEffect} from 'react';
import axios from "axios";
import {CheckCircleOutlined, DeleteOutlined} from "@ant-design/icons";
import {Modal, notification, Table} from "antd";
import moment from "moment";

export function UserOrders() {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        axios.get(`https://localhost:7274/api/tickets/findTickets?clientId=${1}`)
            .then(res => {
                setTickets(res.data);
            });
    }, []);

    useEffect(() => {
    }, [tickets]);

    const filterData = (field) => [...new Set(tickets.map(x => x[field]))].map(item => ({
        text: item,
        value: item
    }));

    const columns = [
        {
            title: 'Название тура',
            dataIndex: 'nameOfTour',
        },
        {
            title: 'Название отеля',
            dataIndex: 'nameOfHotel',
        },
        {
            title: 'Период поездки',
            dataIndex: 'tourPeriod',
            filterSearch: true,
        },
        {
            title: 'Количество людей',
            dataIndex: 'countOfPeople',
            filters: filterData('countOfPeople'),
            onFilter: (value, record) => record.countOfPeople === value,
            sorter: (a, b) => a.countOfPeople - b.countOfPeople,
        },
        {
            title: 'Цена',
            dataIndex: 'cost',
            filterSearch: true,
            filters: filterData('cost'),
            onFilter: (value, record) => record.cost === value,
            sorter: (a, b) => a.cost.localeCompare(b.cost)
        },
        {
            title: 'Действия',
            dataIndex: 'action',
            render: (value, record) => {
                return (
                    <>
                        <DeleteOutlined style={{color: "red", marginLeft: 12}} onClick={() => {
                            onDeleteTicket(record)
                        }}
                        />
                    </>
                )
            }
        },
    ];

    function successNotification() {
        notification.open({
            message: 'Билет успешно отменен!',
            icon: <CheckCircleOutlined style={{color: "green"}}/>
        });
    }

    const handleDelete = (key) => {
        axios.delete(`https://localhost:7274/api/tickets/${key}`)
            .then(response => {
                setTickets(tickets.filter((item) => item.ticketId !== key));
                successNotification();
            })
    };

    const onDeleteTicket = (record) => {
        if (tickets.length >= 1)
            Modal.confirm({
                title: "Нажмите 'Удалить' для отмены билета",
                okType: 'danger',
                okText: "Удалить",
                cancelText: "Отменить",
                onOk: () => {
                    handleDelete(record.key)
                }
            })
    };

    return (
        <div className="main-block">
            <div className="manager-table">
                <Table columns={columns}
                       title={() => 'Данные о заказанных билетах'}
                       pagination={{pageSize: 5}}
                       dataSource={tickets.map(currentValue => ({
                           key: currentValue.ticketId,
                           nameOfTour: currentValue.nameOfTour,
                           nameOfHotel: currentValue.nameOfHotel,
                           tourPeriod: `с  ${moment(currentValue.departureDate).format('DD-MM-YYYY HH:mm')}  по  ${moment(currentValue.arrivalDate).format('DD-MM-YYYY HH:mm')}`,
                           countOfPeople: currentValue.countOfPeople,
                           cost: currentValue.cost
                       }))}/>
            </div>
        </div>
    );
}