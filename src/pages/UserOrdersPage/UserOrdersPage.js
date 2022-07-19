import React from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import {UserOrders} from "../../components/Layout/Main/UserOrders/UserOrders";

export function UserOrdersPage() {
    return (
        <>
            <UserHeader />
            <UserOrders />
        </>
    );
}