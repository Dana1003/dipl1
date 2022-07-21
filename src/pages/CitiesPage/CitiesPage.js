import React from 'react';
import { MainHeader } from "../../components/Layout/Header/MainHeader";
import { MainCities } from "../../components/Layout/Main/MainCIties/MainCities";
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