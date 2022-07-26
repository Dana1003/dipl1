import React from 'react';
import { Link } from "react-router-dom";

import { CaretDownOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
    faListCheck,
    faChartPie,
    faCity,
    faHeartCirclePlus,
    faHeartCircleCheck
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
                    label: <Link to="/userTheMostPopularTours">Самые популярные туры</Link>,
                    icon: <FontAwesomeIcon icon={faChartPie}/>
                },
                {
                    key: 'kinds',
                    label: <Link to="/userKindsOfTourism">Виды туризма</Link>,
                    icon: <FontAwesomeIcon icon={faUmbrellaBeach}/>

                },
                {
                    key: 'countries',
                    label: <Link to="/userCities" >Города</Link>,
                    icon: <FontAwesomeIcon icon={faCity}/>
                },
                {
                    key: 'hotels',
                    label: <Link to="/userHotelsCatalog" >Каталог отелей</Link>,
                    icon: <FontAwesomeIcon icon={faHotel}/>
                },
                {
                    key: 'tours',
                    label: <Link to="/userToursCatalog" >Каталог туров</Link>,
                    icon: <FontAwesomeIcon icon={faToriiGate}/>
                },
                {
                    key: 'insurance',
                    label: <Link to="" >Страхование</Link>,
                    icon: <FontAwesomeIcon icon={faFileMedical}/>
                },
                {
                    key: 'memo',
                    label: <Link to="/userTouristMemo" >Памятка туриста</Link>,
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
                    key:'addTourHotel',
                    label: <Link to="/userSelectedTourHotel">Добавить в избранное</Link>,
                    icon: <FontAwesomeIcon icon={faHeartCirclePlus}></FontAwesomeIcon>
                },
                {
                    key:'viewTourHotel',
                    label: <Link to="/userViewSelectedTourHotel">Просмотреть избранное</Link>,
                    icon: <FontAwesomeIcon icon={faHeartCircleCheck}></FontAwesomeIcon>
                },
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