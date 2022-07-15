import React from 'react';
import { AdminHeader } from "../../components/Layout/Header/AdminHeader";
import { AdminHotelsTable } from "../../components/Layout/Main/AdminHotelsTable/AdminHotelsTable";

export function AdminViewHotelDetails() {
    return (
        <>
            <AdminHeader />
            <AdminHotelsTable />
        </>
    );
}