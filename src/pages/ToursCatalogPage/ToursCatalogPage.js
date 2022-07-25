import React from 'react';
import { MainHeader } from "../../components/Layout/Header/MainHeader";
import { ToursCatalog } from "../../components/Layout/Main/ToursCatalog/ToursCatalog";

export function ToursCatalogPage() {
    return (
        <>
            <MainHeader />
            <ToursCatalog />
        </>
    );
}