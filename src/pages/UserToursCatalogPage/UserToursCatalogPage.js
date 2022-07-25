import React from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { ToursCatalog } from "../../components/Layout/Main/ToursCatalog/ToursCatalog";

export function UserToursCatalogPage() {
    return (
        <>
            <UserHeader />
            <ToursCatalog />
        </>
    );
}