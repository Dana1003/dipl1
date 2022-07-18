import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserTie,
    faDoorOpen,
    faSun,
    faCalendarDays,
    faHotel,
    faUmbrellaBeach
} from "@fortawesome/free-solid-svg-icons";

import { Menu } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import './MainHeader.scss';
import moment from "moment";

export function AdminHeader({managerId}) {
    const [startDate, setStartDate] = useState(null);

    const onExitHandler = () =>{
        let obj = ({
            startDate:startDate,
            endDate:moment().format(),
            managerId:managerId
        })
        console.log(obj)
    }

    useEffect(() => {
        setStartDate(moment().format())
    }, []);

    const menuItems = [
        {
            key: 'logo',
            label: <Link to="/adminMainPage">SunTour</Link>,
            icon: <FontAwesomeIcon icon={faSun}/>
        },
        {
            key: 'tourism',
            label: "Данные о",
            icon: <CaretDownOutlined/>,
            children: [
                {
                    label: <Link to="/adminViewManagerDetails">Менеджере</Link>,
                    key: 'managers',
                    icon: <FontAwesomeIcon icon={faUserTie}/>
                },
                {
                    label: <Link to="/adminViewScheduleDetails">Графике работы</Link>,
                    key: 'schedules',
                    icon: <FontAwesomeIcon icon={faCalendarDays}/>
                },
                {
                    label: <Link to="/adminViewHotelDetails">Отелях</Link>,
                    key: 'hotels',
                    icon: <FontAwesomeIcon icon={faHotel}/>
                },
                {
                    label: <Link to="/adminViewTourDetails">Турах</Link>,
                    key: 'tours',
                    icon: <FontAwesomeIcon icon={faUmbrellaBeach}/>
                }
            ],
        },
        {
            key: 'auth',
            label: <Link to="/authorize">Выход</Link>,
            icon: <FontAwesomeIcon icon={faDoorOpen}/>,
            onClick: onExitHandler
        }
    ]

    return (
        <Menu key="zero" mode="horizontal" items={menuItems}/>
    );
}