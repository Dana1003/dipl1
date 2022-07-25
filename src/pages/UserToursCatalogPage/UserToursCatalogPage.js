import React from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { UserToursCatalog } from "../../components/Layout/Main/UserToursCatalog/UserToursCatalog";

export function UserToursCatalogPage() {
    return (
        <>
            <UserHeader />
            <UserToursCatalog />
        </>
    );
}