import React from 'react';
import { AdminHeader } from "../../components/Layout/Header/AdminHeader";
import { AdminManagersTable } from "../../components/Layout/Main/AdminManagersTable/AdminManagersTable";
import {
    AdminManagerScheduleTable
} from "../../components/Layout/Main/AdminManagerScheduleTable/AdminManagerScheduleTable";

export function AdminUpdateDeleteManagerSchedule() {
    return (
        <div>
            <AdminHeader />
            <AdminManagerScheduleTable />
        </div>
    );
}