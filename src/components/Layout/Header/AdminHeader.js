import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserTie,
    faDoorOpen,
    faSun,
    faCalendarDays
} from "@fortawesome/free-solid-svg-icons";

import { Menu } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import './MainHeader.scss';

export function AdminHeader() {
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
                }
            ],
        },
        {
            key: 'auth',
            label: <Link to="/authorize">Выход</Link>,
            icon: <FontAwesomeIcon icon={faDoorOpen}/>
        }
    ]

    return (
        <Menu key="zero" mode="horizontal" items={menuItems}/>
    );
}