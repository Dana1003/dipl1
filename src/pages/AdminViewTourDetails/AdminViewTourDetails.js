import React from 'react';
import { AdminHeader } from "../../components/Layout/Header/AdminHeader";
import { AdminToursTable } from "../../components/Layout/Main/AdminToursTable/AdminToursTable";

export function AdminViewTourDetails() {
    return (
        <>
            <AdminHeader />
            <AdminToursTable />
        </>
    );
}