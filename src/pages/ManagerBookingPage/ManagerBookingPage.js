import React from 'react';
import { ManagerHeader } from "../../components/Layout/Header/ManagerHeader";
import { ManagerBooking } from "../../components/Layout/Main/ManagerBooking/ManagerBooking";

export function ManagerBookingPage() {
    return (
        <>
            <ManagerHeader />
            <ManagerBooking />
        </>
    );
}