import React from 'react';
import { MainHeader } from "../../components/Layout/Header/MainHeader";
import { TouristMemo } from "../../components/Layout/Main/TouristMemo/TouristMemo";
import { Footer } from "../../components/Layout/Footer/Footer";

export function TouristMemoPage() {
    return (
        <>
            <MainHeader />
            <TouristMemo />
            <Footer />
        </>
    );
}