import React from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { UserHotelsCatalog } from "../../components/Layout/Main/UserHotelsCatalog/UserHotelsCatalog";

export function UserHotelsCatalogPage() {
    return (
        <>
            <UserHeader />
            <UserHotelsCatalog />
        </>
    );
}