import React from 'react';
import { AdminHeader } from "../../components/Layout/Header/AdminHeader";
import { AdminManagersTable } from "../../components/Layout/Main/AdminManagersTable/AdminManagersTable";

export function AdminViewManagerDetails() {
    return (
        <div>
            <AdminHeader />
            <AdminManagersTable />
        </div>
    );
}


