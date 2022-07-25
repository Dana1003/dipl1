import React from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { HotelsCatalog } from "../../components/Layout/Main/HotelsCatalog/HotelsCatalog";

export function UserHotelsCatalogPage() {
    return (
        <>
            <UserHeader />
            <HotelsCatalog />
        </>
    );
}