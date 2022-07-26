import React from 'react';
import { ManagerHeader } from "../../components/Layout/Header/ManagerHeader";
import { ToursCatalog } from "../../components/Layout/Main/ToursCatalog/ToursCatalog";
import { Footer } from "../../components/Layout/Footer/Footer";

export function ManagerToursCatalogPage() {
    return (
        <>
            <ManagerHeader />
            <ToursCatalog />
            <Footer />
        </>
    );
}