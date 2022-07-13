import React from 'react';

import { AdminHeader } from "../../components/Layout/Header/AdminHeader";
import { MainPageBlock } from "../../components/Layout/Main/MainPageBlock";

export function AdminMainPage() {
    return (
        <div>
            <AdminHeader />
            <MainPageBlock />
        </div>
    );
}