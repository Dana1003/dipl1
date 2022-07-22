import React from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { UserSelectedTourHotel } from "../../components/Layout/Main/UserSelectedTourHotel/UserSelectedTourHotel";

export function UserSelectedTourHotelPage() {
    return (
        <>
            <UserHeader />
            <UserSelectedTourHotel />
        </>
    );
}