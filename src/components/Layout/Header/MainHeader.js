import React from 'react';

import { Link } from "react-router-dom";

import { Menu } from 'antd';
import { CaretDownOutlined} from '@ant-design/icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCity,
    faUmbrellaBeach,
    faHotel,
    faFilePen,
    faUser,
    faSun,
    faToriiGate
} from "@fortawesome/free-solid-svg-icons";

import './MainHeader.scss';

export function MainHeader() {
    const menuItems = [
        {
            key: 'logo',
            label: <Link to="/">SunTour</Link>,
            icon: <FontAwesomeIcon icon={faSun}/>
        },
        {
            key: 'tourism',
            label: "Туристам",
            icon: <CaretDownOutlined/>,
            children: [
                {
                    key: 'kinds',
                    label: <Link to="/kindsOfTourism">Виды туризма</Link>,
                    icon: <FontAwesomeIcon icon={faUmbrellaBeach}/>

                },
                {
                    key: 'cities',
                    label: <Link to="/cities">Города</Link>,
                    icon: <FontAwesomeIcon icon={faCity}/>
                },
                {
                    key: 'tours',
                    label: <Link to="/toursCatalog" >Каталог туров</Link>,
                    icon: <FontAwesomeIcon icon={faToriiGate}/>
                },
                {
                    key: 'hotels',
                    label: <Link to="/hotelsCatalog">Каталог отелей</Link>,
                    icon: <FontAwesomeIcon icon={faHotel}/>
                },
                {
                    key: 'memo',
                    label: <Link to="/">Памятка туриста</Link>,
                    icon: <FontAwesomeIcon icon={faFilePen}/>
                }
            ],
        },
        {
            key: 'sales',
            label: <Link to="/">Спецпредложения</Link>
        },
        {
            key: 'reviews',
            label: <Link to="/review">Отзывы</Link>
        },
        {
            key: 'about',
            label: <Link to="/aboutUs">О нас</Link>
        },
        {
            key: 'auth',
            label: <Link to="/authorize">Личный кабинет</Link>,
            icon: <FontAwesomeIcon icon={faUser}/>
        }
    ]


    return (
        <Menu key="zero" mode="horizontal" items={menuItems}/>
    );
}