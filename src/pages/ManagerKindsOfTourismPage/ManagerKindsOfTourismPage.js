import React from 'react';
import { ManagerHeader } from "../../components/Layout/Header/ManagerHeader";
import { MainKindsOfTourism } from "../../components/Layout/Main/MainKindsOfTourism/MainKindsOfTourism";
import { Footer } from "../../components/Layout/Footer/Footer";

export function ManagerKindsOfTourismPage() {
    return (
        <>
            <ManagerHeader />
            <MainKindsOfTourism />
            <Footer />
        </>
    );
}