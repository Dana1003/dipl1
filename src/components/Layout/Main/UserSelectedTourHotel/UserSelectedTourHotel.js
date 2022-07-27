import React, { useState, useEffect } from 'react';

import { Button, Rate, Table } from "antd";
import TourService from "../../../../service/tour";
import HotelService from "../../../../service/hotel";
import TourHotelService from "../../../../service/tourHotel";

export function UserSelectedTourHotel() {
    const [tours, setTours] = useState([])
    const [hotels, setHotels] = useState([])
    const [isHotelsVisible, setIsHotelsVisible] = useState(false)
    const [isButtonVisible, setIsButtonVisible] = useState(false)
    const [selectedTour, setSelectedTour] = useState(null)
    const [selectedHotel, setSelectedHotel] = useState(null)

    useEffect(() => {
        TourService.getTours(setTours)
    }, [])
    useEffect(() => {
    },[tours])

    const onTourChange = (key, value) => {
        setSelectedTour(value[0])
        HotelService.getHotelByCity(value, setHotels, setIsHotelsVisible)
    }
    const onHotelChange = (key, value) => {
        setSelectedHotel(value[0])
        setIsButtonVisible(true)
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

    const onFavouriteHandle = () =>{
        TourHotelService.postTourHotelToFavourite(selectedTour, selectedHotel, setIsHotelsVisible, setSelectedHotel, setSelectedTour, setTours)
    }

    return (
        <div className="main-block">
            <h2>Выберите тур и отель для добавления в избранное</h2>
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
                <>
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
                                countOfStars: <Rate allowClear={false} value={currentValue.countOfStars}/>,
                                city: currentValue.city,
                                address: currentValue.address,
                                roomCost: currentValue.roomCost
                            }))}/>
                    </div>
                    {isButtonVisible && (
                        <div className="add-button">
                            <Button type="primary" className="add-button" onClick={onFavouriteHandle}
                                    style={{marginTop: 50}}>
                                Добавить в избранное
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}