import React from 'react';

import {AdminHeader} from "../../components/Layout/Header/AdminHeader";
import {MainPageBlock} from "../../components/Layout/Main/MainPageBlock";
import {useLocation} from "react-router";

export function AdminMainPage() {
    return (
        <div>
            <AdminHeader managerId={useLocation().state.managerId}/>
            <MainPageBlock/>
        </div>
    );
}