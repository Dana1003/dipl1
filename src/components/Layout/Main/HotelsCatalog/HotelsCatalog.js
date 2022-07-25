import React, {useState, useEffect} from 'react';
import axios from "axios";

import { Rate, Table } from "antd";

export function HotelsCatalog() {
    const [hotels, setHotels] = useState([]);

    const filter = (field) => [...new Set(hotels.map(x => x[field]))].map(value => ({
        text: value,
        value: value
    }));

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
        }
    ];

    useEffect(() => {
        axios.get('https://localhost:7274/api/hotels')
            .then(res => {
                setHotels(res.data);
            });
    }, []);

    return (
        <div className="main-block">
            <div className="table">
                <Table columns={columns}
                       title={() => 'Список отелей'}
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
        </div>
    );
}