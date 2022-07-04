import React, { useState } from 'react';
import axios from "axios";
import {TabulatorFull as Tabulator} from "tabulator-tables";

import './AdminManagersTable.scss'

export function AdminManagersTable() {
    const [managers, setManagers] = useState([]);

    const tabledata = [
        {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
        {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
        {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
        {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
        {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
    ];

    React.useEffect(() => {
        axios.get('https://localhost:7274/api/managers')
            .then(res => {
                setManagers(res.data)
                console.log(res.data)
            })

        let table = new Tabulator("#manager-table", {
            height:"311px",
            data:tabledata,
            layout:"fitColumns", //fit columns to width of table (optional)
            columns:[ //Define Table Columns
                {title:"Name", field:"name", width:150},
                {title:"Age", field:"age", hozAlign:"left", formatter:"progress"},
                {title:"Favourite Color", field:"col", formatter: "color"},
                {title:"Date Of Birth", field:"dob", sorter:"date", hozAlign:"center"},
            ],
        });
    }, []);

    return (
        <div>
            <div id="manager-table" style={{marginTop: 100}}></div>
        </div>
    );
};