import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserTie,
    faDoorOpen
} from "@fortawesome/free-solid-svg-icons";

import './MainHeader.scss';

export function AdminHeader() {
    return (
        <>
            <div className="header">
                <div>
                    <ul className="list-menu1">
                        <li>
                            <Link to="/adminMainPage" className="menu-item1 transition">SunTour</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="list-menu">
                        <div className="dropdown">
                            <li className="nav-item"><a className="list-menu-item transition">Добавить</a></li>
                            <ul className="dropdown-content transition">
                                <li>
                                    <FontAwesomeIcon icon={faUserTie} />
                                    <Link to="/addManager" className="dropdown-content-items">Менежер</Link>
                                </li>
                            </ul>
                        </div>
                        <li className="nav-item"><a className="list-menu-item transition">Удалить</a></li>
                        <li className="nav-item"><a className="list-menu-item transition">Изменить</a></li>
                        <li className="nav-item"><a className="list-menu-item transition">Данные о</a></li>
                        <li className="nav-item">
                            <FontAwesomeIcon icon={faDoorOpen} />
                            <Link to="/authorize" className="list-menu-item transition">Выход</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}