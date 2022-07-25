import React from 'react';
import { MainHeader } from "../../components/Layout/Header/MainHeader";
import { TouristMemo } from "../../components/Layout/Main/TouristMemo/TouristMemo";

export function TouristMemoPage() {
    return (
        <>
            <MainHeader />
            <TouristMemo />
        </>
    );
}