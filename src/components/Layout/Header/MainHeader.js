import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import userIcon from "../../../images/userIcon.png";
import {Menu, Dropdown, Space, Layout} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {
    AntdLayout
} from "@pankod/refine-antd";

import './MainHeader.scss';
import {
    faEarthAmericas,
    faUmbrellaBeach,
    faHotel,
    faFileMedical,
    faFilePen,
    faUser
} from "@fortawesome/free-solid-svg-icons";

export function MainHeader() {

    const menu = (
        <Menu
            items={[
                {
                    label: (
                        <Link to="/kindsOfTourism" className="dropdown-content-items">Виды туризма</Link>
                    ),
                    key: '0',
                    icon: <FontAwesomeIcon icon={faUmbrellaBeach}/>

                },
                {
                    label: (
                        <Link to="/" className="dropdown-content-items">Страны</Link>
                    ),
                    key: '1',
                    icon: <FontAwesomeIcon icon={faEarthAmericas}/>
                },
                {
                    label: (
                        <Link to="/" className="dropdown-content-items">Каталог отелей</Link>
                    ),
                    key: '2',
                    icon: <FontAwesomeIcon icon={faHotel}/>
                },
                {
                    label: (
                        <Link to="/" className="dropdown-content-items">Страхование</Link>
                    ),
                    key: '3',
                    icon: <FontAwesomeIcon icon={faFileMedical}/>
                },
                {
                    label: (
                        <Link to="/" className="dropdown-content-items">Памятка туриста</Link>
                    ),
                    key: '4',
                    icon: <FontAwesomeIcon icon={faFilePen}/>
                }
            ]}
        />
    );

    const menuItems = [
        {
            key: 'nav1',
            label: <Link to="/">Спецпредложения</Link>
        },
        {
            key: 'nav2',
            label: <Link to="/review">Отзывы</Link>
        },
        {
            key: 'nav3',
            label: <Link to="/">О нас</Link>
        },
        {
            key: 'nav4',
            label: <Link to="/authorize">Личный кабинет</Link>,
            icon:  <FontAwesomeIcon icon={faUser} />
        }
    ]

    const logo = [
        {
            key: 'logo',
            label: (
                <Link to="/">SunTour</Link>
            )
        }
    ]

    return (
        <>
            <AntdLayout.Header
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: 50,
                    background: "#FFF",
                    justifyContent: "space-evenly"
                }}
            >
                <React.Fragment>
                    <Menu items={logo}/>
                    <Dropdown overlay={menu} placement="bottom">
                        <a onClick={(e) => e.preventDefault()}>
                            Туристам
                            <DownOutlined/>
                        </a>
                    </Dropdown>
                    <Menu style={{lineHeight: '45px', width: "85%"}}
                          mode="horizontal"
                          items={menuItems}
                    />

                </React.Fragment>
            </AntdLayout.Header>
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