import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Button, DatePicker, Form, notification, Rate, Table} from "antd";
import {CountOfAdult} from "../../../../Forms/FormsItems/CountOfAdult";
import {CountOfChildren} from "../../../../Forms/FormsItems/CountOfChildren";
import {DaysAmount} from "../../../../Forms/FormsItems/DaysAmount";
import moment from "moment";
import {CheckCircleOutlined} from "@ant-design/icons";

export function UserBooking() {
    const [tours, setTours] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [isHotelsVisible, setIsHotelsVisible] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [isTicketVisible, setIsTicketVisible] = useState(false);

    const [countOfChildren, setCountOfChildren] = useState(0);
    const [countOfAdult, setCountOfAdult] = useState(0);
    const [countOfDays, setCountOfDays] = useState(0);
    const [date, setDate] = useState(null);

    useEffect(() => {
        axios.get('https://localhost:7274/api/tours')
            .then(res => {
                setTours(res.data);
            });
    }, []);

    function successNotification() {
        notification.open({
            message: 'Бронь прошла успешно!',
            icon: <CheckCircleOutlined style={{color: "green"}} />
        });
    }

    const onTourChange = (key, value) => {
        setSelectedTour(value[0])
        axios.get(`https://localhost:7274/api/hotels/findHotels?city=${value[0].departureCity}`)
            .then(res => {
                setHotels(res.data);
                setIsHotelsVisible(true)
            });
    }

    const disabledDate = (current) => {
        return current && current < moment().endOf('day');
    };

    const onBookingHandle = () => {

        axios.post('https://localhost:7274/api/tourHotel', ({
            "tourId": selectedTour.key,
            "hotelId": selectedHotel.key
        }))
            .then(res => {
                axios.post('https://localhost:7274/api/tickets', ({
                    "clientId": 1,
                    "tourHotelId": res.data.tourHotelId,
                    "cost": selectedTour.tourCost +
                        (selectedHotel.roomCost * countOfAdult + selectedHotel.roomCost / 2 * countOfChildren) * countOfDays,
                    "departureDate": date.utcOffset('GMT').format(),
                    "arrivalDate": date.add('Days', countOfDays).utcOffset('GMT').format(),
                    "status": true,
                    "countOfPeople": Number(countOfChildren) + Number(countOfAdult)
                }))
                    .then(res => {
                        setIsTicketVisible(false)
                        setIsHotelsVisible(false)
                        setSelectedHotel(null)
                        setSelectedTour(null)
                        setDate(null)
                        setCountOfDays(0)
                        setCountOfAdult(0)
                        setCountOfChildren(0)
                        successNotification();
                    });
            });

    }

    const onHotelChange = (key, value) => {
        setSelectedHotel(value[0])
        setIsTicketVisible(true)
    }

    const filteredData = (field) => [...new Set(tours.map(x => x[field]))].map(item => ({
        text: item,
        value: item
    }));

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
    ];

    const filter = (field) => [...new Set(hotels.map(x => x[field]))].map(value => ({
        text: value,
        value: value
    }));

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
    ];


    return (
        <>
            <div className="main-block">
                <div className="manager-table">
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
                    <div className="manager-table">
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
                                countOfStars: <Rate allowClear={false} value={currentValue.countOfStars}/>,
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
                            <CountOfAdult
                                value={countOfAdult}
                                onChange={(input) => {
                                    setCountOfAdult(input.target.value)
                                }}/>
                            <CountOfChildren
                                value={countOfChildren}
                                onChange={(input) => {
                                    setCountOfChildren(input.target.value)
                                }}/>
                            <DaysAmount
                                value={countOfDays}
                                onChange={(input) => {
                                    setCountOfDays(input.target.value)
                                }}/>
                            <DatePicker
                                value={date}
                                allowClear={false}
                                disabledDate={disabledDate}
                                showTime={{
                                    defaultValue: moment('00:00', 'HH:mm'),
                                    format: ('HH:mm')
                                }}
                                onChange={(input) => {
                                    setDate(input)
                                }}
                            />
                        </Form>
                        <div className="add-button">
                            <Button type="primary" className="add-button" onClick={onBookingHandle}
                                    style={{marginTop: 50}}>
                                Забронировать
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}