import React from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { UserBooking } from "../../components/Layout/Main/UserBooking/UserBooking";

export function BookingPage() {
    return (
        <>
            <UserHeader />
            <UserBooking />
        </>
    );
}