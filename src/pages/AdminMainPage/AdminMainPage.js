import React from 'react';
import { AdminHeader } from "../../components/Layout/Header/AdminHeader";
import { useState } from "react";
import axios from "axios";

export function AdminMainPage() {
    const [lastName, setLastName] = useState('');

/*    function findHandler() {
        axios.get(`https://localhost:7274/api/managers/findManagers?LastName=${lastName}`)
            .then(response => {
                setLastName(response.data)
                console.log(response.data)
            })
    }*/

    return (
        <div>
            <AdminHeader />
{/*            <div>
                <input className="test-input"
                       type="text"
                       id="lastName"
                       placeholder="Введите фамилию"
                       onChange={(e) => setLastName(e.target.value)}/>
                <button className="test-input transition" onClick={findHandler}>Сохранить</button>
            </div>*/}
        </div>
    );
}