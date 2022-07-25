import React from 'react';
import { MainHeader } from "../../components/Layout/Header/MainHeader";
import { HotelsCatalog } from "../../components/Layout/Main/HotelsCatalog/HotelsCatalog";

export function HotelsCatalogPage() {
    return (
        <>
            <MainHeader />
            <HotelsCatalog />
        </>
    );
}