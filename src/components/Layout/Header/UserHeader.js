import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDoorOpen,
    faEarthAmericas, faFileMedical, faFilePen,
    faHotel,
    faSun,
    faUmbrellaBeach, faUser,
    faUserTie
} from "@fortawesome/free-solid-svg-icons";
import {CaretDownOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import styles from "./MainHeader.scss";

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
                    key: 'kinds',
                    label: <Link to="/kindsOfTourism" className="dropdown-content-items">Виды туризма</Link>,
                    icon: <FontAwesomeIcon icon={faUmbrellaBeach}/>

                },
                {
                    key: 'countries',
                    label: <Link to="/" className="dropdown-content-items">Страны</Link>,
                    icon: <FontAwesomeIcon icon={faEarthAmericas}/>
                },
                {
                    key: 'catalog',
                    label: <Link to="/" className="dropdown-content-items">Каталог отелей</Link>,
                    icon: <FontAwesomeIcon icon={faHotel}/>
                },
                {
                    key: 'catalog',
                    label: <Link to="/" className="dropdown-content-items">Каталог туров</Link>,
                    icon: <FontAwesomeIcon icon={faHotel}/>
                },
                {
                    key: 'insurance',
                    label: <Link to="/" className="dropdown-content-items">Страхование</Link>,
                    icon: <FontAwesomeIcon icon={faFileMedical}/>
                },
                {
                    key: 'memo',
                    label: <Link to="/" className="dropdown-content-items">Памятка туриста</Link>,
                    icon: <FontAwesomeIcon icon={faFilePen}/>
                }
            ],
        },
        {
            key: 'reviews',
            label: <Link to="/review">Бронь</Link>
        },
        {
            key: 'profile',
            label: 'Мой профиль',
            children: [
                {
                  key: 'privateData',
                  label: <Link to="/userPrivateData">Личные данные</Link>
                },
                {
                    key: 'review',
                    label: <Link to="/userMainPage">Отзывы</Link>
                }
            ]
        },
        {
            key: 'auth',
            label: <Link to="/authorize">Выход</Link>,
            icon: <FontAwesomeIcon icon={faUser}/>
        }
    ]


    return (
        <>
            <Menu key="userMenu" mode="horizontal" items={menuItems} className={styles.header}
                  style={{
                      backgroundColor: "#808a9d",
                      justifyContent: "center"
                  }}
            />
        </>
    );
}