import React from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { TouristMemo } from "../../components/Layout/Main/TouristMemo/TouristMemo";

export function UserTouristMemoPage() {
    return (
        <>
            <UserHeader />
            <TouristMemo />
        </>
    );
}