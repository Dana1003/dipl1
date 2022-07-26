import React from 'react';
import { ManagerHeader } from "../../components/Layout/Header/ManagerHeader";
import { MainCities } from "../../components/Layout/Main/MainCities/MainCities";
import { Footer } from "../../components/Layout/Footer/Footer";

export function ManagerCitiesPage() {
    return (
        <>
            <ManagerHeader />
            <MainCities />
            <Footer />
        </>
    );
}