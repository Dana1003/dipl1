import React from 'react';
import { ManagerHeader } from "../../components/Layout/Header/ManagerHeader";
import { Footer } from "../../components/Layout/Footer/Footer";
import {ManagerGetTicket} from "../../components/Layout/Main/ManagerGetTicket/ManagerGetTicket";

export function ManagerBooking() {
    return (
        <>
            <ManagerHeader />
            <ManagerGetTicket/>
            <Footer />
        </>
    );
}