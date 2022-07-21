import React from 'react';
import { AdminHeader } from "../../components/Layout/Header/AdminHeader";
import { AdminManagerWorkTimeTable } from "../../components/Layout/Main/AdminManagerWorkTimeTable/AdminManagerWorkTimeTable";

export function AdminManagerWorkTime() {
    return (
        <>
            <AdminHeader />
            <AdminManagerWorkTimeTable />
        </>
    );
}