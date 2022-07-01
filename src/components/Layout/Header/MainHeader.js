import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import userIcon from "../../../images/userIcon.png";

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
    return (
        <>
{/*            <div className="blackout"></div>*/}
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
        </>
    );
}