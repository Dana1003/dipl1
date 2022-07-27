import React, { useState, useEffect } from 'react';
import moment from "moment";
import { CountOfAdult } from "../../../../Forms/FormsItems/CountOfAdult";
import { CountOfChildren } from "../../../../Forms/FormsItems/CountOfChildren";
import { DaysAmount } from "../../../../Forms/FormsItems/DaysAmount";
import { TravelStartDate } from "../../../../Forms/FormsItems/TravelStartDate";

import TourService from "../../../../service/tour";
import ClientService from "../../../../service/client";
import HotelService from "../../../../service/hotel";
import TourHotelService from "../../../../service/tourHotel";

import { Button, Form, notification, Rate, Table } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export function UserBooking() {
    const [client, setClient] = useState(null)
    const [tours, setTours] = useState([])
    const [hotels, setHotels] = useState([])
    const [isHotelsVisible, setIsHotelsVisible] = useState(false)
    const [selectedTour, setSelectedTour] = useState(null)
    const [selectedHotel, setSelectedHotel] = useState(null)
    const [isTicketVisible, setIsTicketVisible] = useState(false)
    const [countOfChildren, setCountOfChildren] = useState(0)
    const [countOfAdult, setCountOfAdult] = useState(0)
    const [countOfDays, setCountOfDays] = useState(0)
    const [date, setDate] = useState(null)

    useEffect(() => {
        TourService.getTours(setTours)
        ClientService.getClient(setClient)
    }, [])

    function birthdayNotification() {
        notification.open({
            message: 'Сумма рассчитанная к оплате будет предоставлена со скидкой в 10%!',
            icon: <SmileOutlined style={{color: "green"}}/>
        });
    }
    const onTourChange = (key, value) => {
        setSelectedTour(value[0])
        HotelService.getHotelByCity(value, setHotels, setIsHotelsVisible)
    }
    const disabledDate = (current) => {
        return current && current < moment().endOf('day');
    }
    const onCalculateCost = () => {
        if ((new Date(client.bithDate).getMonth() + 1) === (new Date().getMonth() + 1)
            && new Date(client.bithDate).getDate() === new Date().getDate()) {
            birthdayNotification()
            return (selectedTour.tourCost +
                (selectedHotel.roomCost * countOfAdult + selectedHotel.roomCost / 2 * countOfChildren) * countOfDays) * 0.9;
        } else
            return selectedTour.tourCost +
                (selectedHotel.roomCost * countOfAdult + selectedHotel.roomCost / 2 * countOfChildren) * countOfDays;
    }
    const onBookingHandle = () => {
       TourHotelService.postTourHotel(selectedTour, selectedHotel,
           onCalculateCost, date,
           countOfDays, countOfChildren,
           countOfAdult, setIsTicketVisible,
           setIsHotelsVisible, setSelectedHotel,
           setSelectedTour, setDate,
           setCountOfDays, setCountOfAdult,
           setCountOfChildren)
    }
    const onHotelChange = (key, value) => {
        setSelectedHotel(value[0])
        setIsTicketVisible(true)
    }

    const filteredData = (field) => [...new Set(tours.map(x => x[field]))].map(item => ({
        text: item,
        value: item
    }))
    const filter = (field) => [...new Set(hotels.map(x => x[field]))].map(value => ({
        text: value,
        value: value
    }))

    const columnsTours = [
        {
            title: 'Город отправления',
            dataIndex: 'arrivalCity',
            filters: filteredData('arrivalCity'),
            onFilter: (value, record) => record.arrivalCity === value,
            sorter: (a, b) => a.arrivalCity.localeCompare(b.arrivalCity)
        },
        {
            title: 'Город прибытия',
            dataIndex: 'departureCity',
            filters: filteredData('departureCity'),
            onFilter: (value, record) => record.departureCity === value,
            sorter: (a, b) => a.departureCity.localeCompare(b.departureCity)
        },
        {
            title: 'Тип тура',
            dataIndex: 'tourType',
            filterSearch: true,
            filters: filteredData('tourType'),
            onFilter: (value, record) => record.tourType === value,
            sorter: (a, b) => a.tourType.localeCompare(b.tourType)
        },
        {
            title: 'Количество дней',
            dataIndex: 'amountOfDays',
            filters: filteredData('amountOfDays'),
            onFilter: (value, record) => record.amountOfDays === value,
            sorter: (a, b) => a.amountOfDays - b.amountOfDays,
        },
        {
            title: 'Название тура',
            dataIndex: 'nameOfTour',
            filterSearch: true,
            filters: filteredData('nameOfTour'),
            onFilter: (value, record) => record.nameOfTour === value,
            sorter: (a, b) => a.nameOfTour.localeCompare(b.nameOfTour)
        },
        {
            title: 'Цена тура',
            dataIndex: 'tourCost',
            filterSearch: true,
            filters: filteredData('tourCost'),
            onFilter: (value, record) => record.tourCost === value,
            sorter: (a, b) => a.tourCost - b.tourCost,
        },
    ]
    const columnsHotels = [
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
    ]

    return (
        <div className="main-block">
            <div className="table">
                <Table
                    rowSelection={{
                        type: "radio",
                        onChange: onTourChange
                    }}
                    columns={columnsTours}
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
            {isHotelsVisible && (
                <div className="table">
                    <Table
                        rowSelection={{
                            type: "radio",
                            onChange: onHotelChange
                        }}
                        columns={columnsHotels}
                        title={() => 'Данные об отелях'}
                        pagination={{pageSize: 5}}
                        dataSource={hotels.map(currentValue => ({
                            key: currentValue.hotelId,
                            nameOfHotel: currentValue.nameOfHotel,
                            countOfStars: <Rate disabled allowClear={false} value={currentValue.countOfStars}/>,
                            city: currentValue.city,
                            address: currentValue.address,
                            roomCost: currentValue.roomCost
                        }))}/>
                </div>
            )}
            {isTicketVisible && (
                <>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 9,
                        }}
                        wrapperCol={{
                            span: 6,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >
                        <CountOfAdult onChange={(e) => {
                            setCountOfAdult(e)
                        }}/>
                        <CountOfChildren onChange={(e) => {
                            setCountOfChildren(e)
                        }}/>
                        <DaysAmount onChange={(e) => {
                            setCountOfDays(e)
                        }}/>
                        <TravelStartDate onChange={(e) => {
                            setDate(e)
                        }} disabledDate={disabledDate}/>
                    </Form>
                    <div className="add-button">
                        <Button type="primary" className="add-button" onClick={onBookingHandle}
                                style={{marginTop: 50, display: 'flex', alignItems: 'center'}}>
                            Забронировать
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}