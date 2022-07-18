import React from 'react';

import { Link } from "react-router-dom";

import { Menu } from 'antd';
import { CaretDownOutlined} from '@ant-design/icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCity,
    faUmbrellaBeach,
    faHotel,
    faFileMedical,
    faFilePen,
    faUser,
    faSun
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
                    label: <Link to="/kindsOfTourism" className="dropdown-content-items">Виды туризма</Link>,
                    key: 'kinds',
                    icon: <FontAwesomeIcon icon={faUmbrellaBeach}/>

                },
                {
                    label: <Link to="/" className="dropdown-content-items">Города</Link>,
                    key: 'cities',
                    icon: <FontAwesomeIcon icon={faCity}/>
                },
                {
                    label: <Link to="/" className="dropdown-content-items">Каталог отелей</Link>,
                    key: 'catalog',
                    icon: <FontAwesomeIcon icon={faHotel}/>
                },
                {
                    label: <Link to="/" className="dropdown-content-items">Страхование</Link>,
                    key: 'insurance',
                    icon: <FontAwesomeIcon icon={faFileMedical}/>
                },
                {
                    label: <Link to="/" className="dropdown-content-items">Памятка туриста</Link>,
                    key: 'memo',
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
            label: <Link to="/">О нас</Link>
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