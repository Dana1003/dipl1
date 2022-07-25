import React from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { TouristMemo } from "../../components/Layout/Main/TouristMemo/TouristMemo";
import { Footer } from "../../components/Layout/Footer/Footer";

export function UserTouristMemoPage() {
    return (
        <>
            <UserHeader />
            <TouristMemo />
            <Footer />
        </>
    );
}