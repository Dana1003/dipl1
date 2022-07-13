import React, {useState} from 'react';
import {AdminHeader} from "../../components/Layout/Header/AdminHeader";
import {AddSchedule} from "../../Forms/AddSchedule/AddSchedule";
import {AdminAddManagerSchedule} from "../../components/Layout/Main/ManagerScheduleAdd/AdminAddManagerSchedule";

export function AdminAddSchedule() {
    return (
        <>
            <AdminAddManagerSchedule />
        </>
    );
}