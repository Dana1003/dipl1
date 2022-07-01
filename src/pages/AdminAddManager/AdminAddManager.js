import React from 'react';
import {AdminHeader} from "../../components/Layout/Header/AdminHeader";
import {AddManager} from "../../Forms/AddManager/AddManager";

export function AdminAddManager() {
    return (
        <div>
            <AdminHeader />
            <AddManager />
        </div>
    );
};