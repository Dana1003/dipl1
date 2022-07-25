import React, {useState,useEffect} from 'react';
import axios from "axios";
import {Table} from "antd";

export function UserToursCatalog() {
    const [tours,setTours] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7274/api/tours')
            .then(res => {
                setTours(res.data);
            });
    }, []);

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
        }
    ];

    return (
        <div className="manager-table">
            <Table columns={columns}
                   title={() => 'Список туров'}
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
    );
}