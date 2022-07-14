import React from 'react';
import { AdminHeader } from "../../components/Layout/Header/AdminHeader";
import { AdminScheduleTable } from "../../components/Layout/Main/AdminScheduleTable/AdminScheduleTable";

export function AdminViewScheduleDetails() {
    return (
        <>
            <AdminHeader/>
            <AdminScheduleTable/>
        </>
    );
}