import React from 'react';
import { Link } from "react-router-dom";

import { Menu } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCity,
    faDoorOpen,
    faHotel,
    faList,
    faSun,
    faTicket,
    faToriiGate,
    faUmbrellaBeach
} from "@fortawesome/free-solid-svg-icons";
import {CaretDownOutlined} from "@ant-design/icons";

export function ManagerHeader() {
    const menuItems = [
        {
            key: 'logo',
            label: <Link to="/managerMainPage">SunTour</Link>,
            icon: <FontAwesomeIcon icon={faSun}/>
        },
        {
            key: 'tourism',
            label: 'Туристам',
            icon: <CaretDownOutlined/>,
            children: [
                {
                    key: 'kinds',
                    label: <Link to="/managerKindsOfTourism">Виды туризма</Link>,
                    icon: <FontAwesomeIcon icon={faUmbrellaBeach}/>

                },
                {
                    key: 'countries',
                    label: <Link to="/managerCities">Города</Link>,
                    icon: <FontAwesomeIcon icon={faCity}/>
                },
                {
                    key: 'hotels',
                    label: <Link to="/managerHotelsCatalog" >Каталог отелей</Link>,
                    icon: <FontAwesomeIcon icon={faHotel}/>
                },
                {
                    key: 'tours',
                    label: <Link to="/managerToursCatalog" >Каталог туров</Link>,
                    icon: <FontAwesomeIcon icon={faToriiGate}/>
                },
            ]
        },
        {
            key: 'ticketOrder',
            label: <Link to="/managerBooking">Заказать билет</Link>,
            icon: <FontAwesomeIcon icon={faTicket} />
        },
        {
            key: 'reviews',
            label: <Link to="/managerReviewProcessing">Отзывы</Link>,
            icon: <FontAwesomeIcon icon={faList} />
        },
        {
            key: 'auth',
            label: <Link to="/authorize">Выход</Link>,
            icon: <FontAwesomeIcon icon={faDoorOpen}/>
        }
        ]
    return (
        <>
            <Menu key="zero" mode="horizontal" items={menuItems}/>
        </>
    );
}