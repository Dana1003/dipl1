import React, {useEffect, useState} from 'react';
import axios from "axios";
import {AddSchedule} from "../../../../Forms/AddSchedule/AddSchedule";

export function AdminAddManagerSchedule() {
    const [managers, setManagers] = useState([]);

    React.useEffect(() => {
        axios.get('https://localhost:7274/api/managers')
            .then(res => {
                setManagers(res.data);
            });
    }, []);
    return (
        <>
            <AddSchedule managers={managers}/>
        </>
    );
};