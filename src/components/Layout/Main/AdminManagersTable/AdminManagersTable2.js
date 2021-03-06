import React, { useState } from 'react';
import axios from "axios";
import {TabulatorFull as Tabulator} from "tabulator-tables";

import './AdminManagersTable.scss';

export function AdminManagersTable() {
    const [managers, setManagers] = useState([]);
    let table;

    const data = managers.map(currentValue => ({
            id:currentValue.managerId,
            fio:currentValue.lastName + ' ' + currentValue.firstName + ' ' + currentValue.patronymic,
            login:currentValue.login,
            experience:currentValue.workExperience,
            phoneNumber:currentValue.phone
        }))

    React.useEffect(() => {
        axios.get('https://localhost:7274/api/managers')
            .then(res => {
                setManagers(res.data)
                console.log(res.data)
            })

        table = new Tabulator("#manager-table", {
            height:"311px",
            data: data,
            layout:"fitColumns", //fit columns to width of table (optional)
            columns:[ //Define Table Columns
                {title:"ФИО", field:"fio", width:200, editor: "input"},
                {title:"Логин", field:"login", hozAlign:"left", editor: "input"},
                {title:"Опыт работы", field:"experience", formatter: "progress", editor: "input"},
                {title:"Телефон", field:"phoneNumber", hozAlign:"center", editor: "input"},
                {title:"Удалить", hozAlign:"center", formatter: () => "Delete",
                    cellClick: function (e, cell) {
                        axios.delete(`https://localhost:7274/api/managers/${cell.getRow().getData().id}`)
                             .then(response => cell.getRow().delete())
                    }},
                {title:"Изменить", hozAlign:"center", formatter: () => "Изменить",
                    cellClick: function (e, cell) {
                        console.log("update=>" + cell.getRow().getData().id);
                        let fioArray = cell.getRow().getData().fio.split(" ");
                        axios.put(`https://localhost:7274/api/users/${cell.getRow().getData().id}`, {
                            "firstName": fioArray[0],
                            "lastName": fioArray[1],
                            "patronymic": fioArray[2],
                            "phone": cell.getRow().getData().phoneNumber,
                            "login": cell.getRow().getData().login
                        })
                            .then(response => {
                                axios.put(`https://localhost:7274/api/managers/${cell.getRow().getData().id}`, {
                                    "workExperience": cell.getRow().getData().experience
                                })
                                    .then(response =>
                                    {
                                        cell.getRow().update()
                                    })
                            })
                    }}
                /*{title:"Удалить", field:"delete", hozAlign:"center"}*/
            ],

        });
    }, [managers.length]);

    return (
        <div>
            <div id="manager-table" style={{marginTop: 100}}></div>
        </div>
    );
};