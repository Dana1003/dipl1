import React from 'react';

import {Link} from "react-router-dom";

import {Menu} from 'antd';
import {CaretDownOutlined} from '@ant-design/icons';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEarthAmericas,
    faUmbrellaBeach,
    faHotel,
    faFileMedical,
    faFilePen,
    faUser,
    faSun
} from "@fortawesome/free-solid-svg-icons";

import styles from './MainHeader.scss';

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
                    label: <Link to="/" className="dropdown-content-items">Страны</Link>,
                    key: 'countries',
                    icon: <FontAwesomeIcon icon={faEarthAmericas}/>
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
        <>
            <Menu key="zero" mode="horizontal" items={menuItems} className={styles.header}
                  style={{
                      backgroundColor: "#808a9d",
                      justifyContent: "center"
                  }}
            />
        </>
        /*        <>
                    <div className="header">
                        <div>
                            <ul className="list-menu1">
                                <li>
                                    <Link to="/" className="menu-item1 transition">SunTour</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-menu">
                                <div className="dropdown">
                                    <li className="nav-item"><a className="list-menu-item transition">Туристам</a></li>
                                    <ul className="dropdown-content transition">
                                        <li >
                                            <FontAwesomeIcon icon={faUmbrellaBeach} />
                                            <Link to="/kindsOfTourism" className="dropdown-content-items">Виды туризма</Link>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faEarthAmericas} />
                                            <Link to="/" className="dropdown-content-items">Страны</Link>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faHotel} />
                                            <Link to="/" className="dropdown-content-items">Каталог отелей</Link>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faFileMedical} />
                                            <Link to="/" className="dropdown-content-items">Страхование</Link>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faFilePen} />
                                            <Link to="/" className="dropdown-content-items">Памятка туриста</Link>
                                        </li>
                                        <li></li>
                                    </ul>
                                </div>
                                <li className="nav-item"><a className="list-menu-item transition">Спецпредложения</a></li>
                                <li className="nav-item"><Link to="/review" className="list-menu-item transition">Отзывы</Link></li>
                                <li className="nav-item"><a className="list-menu-item transition">О нас</a></li>
                                <li className="nav-item">
                                    <FontAwesomeIcon icon={faUser} />
                                    <Link to="/authorize" className="list-menu-item transition">Личный кабинет</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>*/
    );
}