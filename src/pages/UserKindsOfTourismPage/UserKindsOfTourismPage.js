import React from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { MainKindsOfTourism } from "../../components/Layout/Main/MainKindsOfTourism/MainKindsOfTourism";
import { Footer } from "../../components/Layout/Footer/Footer";

export function UserKindsOfTourismPage() {
    return (
        <>
            <UserHeader />
            <MainKindsOfTourism />
            <Footer />
        </>
    );
}