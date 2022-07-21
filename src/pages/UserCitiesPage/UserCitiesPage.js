import React from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { MainCities } from "../../components/Layout/Main/MainCities/MainCities";
import { Footer } from "../../components/Layout/Footer/Footer";

export function UserCitiesPage() {
    return (
        <>
            <UserHeader />
            <MainCities />
            <Footer />
        </>
    );
}