import React from 'react';
import { MainHeader } from "../../components/Layout/Header/MainHeader";
import { MainCities } from "../../components/Layout/Main/MainCities/MainCities";
import { Footer } from "../../components/Layout/Footer/Footer";

export function CitiesPage() {
    return (
        <>
            <MainHeader />
            <MainCities />
            <Footer />
        </>
    );
}