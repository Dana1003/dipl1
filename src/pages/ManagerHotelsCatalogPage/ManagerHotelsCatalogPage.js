import React from 'react';
import { ManagerHeader } from "../../components/Layout/Header/ManagerHeader";
import { HotelsCatalog } from "../../components/Layout/Main/HotelsCatalog/HotelsCatalog";
import { Footer } from "../../components/Layout/Footer/Footer";

export function ManagerHotelsCatalogPage() {
    return (
        <>
            <ManagerHeader />
            <HotelsCatalog />
            <Footer />
        </>
    );
}