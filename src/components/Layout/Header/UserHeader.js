import React from 'react';
import { Link } from "react-router-dom";

import { CaretDownOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEarthAmericas,
    faFileMedical,
    faFilePen,
    faHotel,
    faSun,
    faUmbrellaBeach,
    faDoorOpen,
    faPassport,
    faList,
    faGear,
    faToriiGate,
    faTicket,
    faListCheck
} from "@fortawesome/free-solid-svg-icons";

import "./MainHeader.scss";

export function UserHeader() {
    const menuItems = [
        {
            key: 'logo',
            label: <Link to="/userMainPage">SunTour</Link>,
            icon: <FontAwesomeIcon icon={faSun}/>
        },
        {
            key: 'tourism',
            label: 'Туристам',
            icon: <CaretDownOutlined/>,
            children: [
                {
                    key: 'theMostPopularTours',
                    label: <Link to="/theMostPopularTours">Самые популярные туры</Link>
                },
                {
                    key: 'kinds',
                    label: <Link to="/kindsOfTourism">Виды туризма</Link>,
                    icon: <FontAwesomeIcon icon={faUmbrellaBeach}/>

                },
                {
                    key: 'countries',
                    label: <Link to="" >Страны</Link>,
                    icon: <FontAwesomeIcon icon={faEarthAmericas}/>
                },
                {
                    key: 'hotels',
                    label: <Link to="" >Каталог отелей</Link>,
                    icon: <FontAwesomeIcon icon={faHotel}/>
                },
                {
                    key: 'tours',
                    label: <Link to="" >Каталог туров</Link>,
                    icon: <FontAwesomeIcon icon={faToriiGate}/>
                },
                {
                    key: 'insurance',
                    label: <Link to="" >Страхование</Link>,
                    icon: <FontAwesomeIcon icon={faFileMedical}/>
                },
                {
                    key: 'memo',
                    label: <Link to="" >Памятка туриста</Link>,
                    icon: <FontAwesomeIcon icon={faFilePen}/>
                }
            ],
        },
        {
            key: 'booking',
            label: 'Бронирование',
            icon: <CaretDownOutlined/>,
            children: [
                {
                    key: 'ticketOrder',
                    label: <Link to="/userBooking">Заказать билет</Link>,
                    icon: <FontAwesomeIcon icon={faTicket} />
                },
                {
                    key: 'myOrders',
                    label: <Link to="/userOrders">Мои заказы</Link>,
                    icon: <FontAwesomeIcon icon={faListCheck} />
                }
            ]
        },
        {
            key: 'profile',
            label: 'Мой профиль',
            icon: <FontAwesomeIcon icon={faGear} />,
            children: [
                {
                  key: 'privateData',
                  label: <Link to="/userPrivateData">Личные данные</Link>,
                  icon: <FontAwesomeIcon icon={faPassport} />
                },
                {
                    key: 'review',
                    label: <Link to="/userReviews">Отзывы</Link>,
                    icon: <FontAwesomeIcon icon={faList} />
                }
            ]
        },
        {
            key: 'auth',
            label: <Link to="/authorize">Выход</Link>,
            icon: <FontAwesomeIcon icon={faDoorOpen}/>
        }
    ]


    return (
        <>
            <Menu key="userMenu" mode="horizontal" items={menuItems}/>
        </>
    );
}