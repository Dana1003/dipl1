import React from 'react';
import {ManagerHeader} from "../../components/Layout/Header/ManagerHeader";
import {ManagerGetTicket} from "../../components/Layout/Main/ManagerGetTicket/ManagerGetTicket";

export function ManagerBookingPage() {
    return (
        <>
            <ManagerHeader />
            <ManagerGetTicket/>
        </>
    );
}