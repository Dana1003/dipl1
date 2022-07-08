import React, {useState} from 'react';
import {AdminHeader} from "../../components/Layout/Header/AdminHeader";
import {AddSchedule} from "../../Forms/AddSchedule/AddSchedule";

export function AdminAddSchedule() {
    return (
        <>
            <AdminHeader />
            <AddSchedule />
        </>
    );
}