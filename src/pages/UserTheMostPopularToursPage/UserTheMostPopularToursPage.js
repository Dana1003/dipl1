import React from 'react';
import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { UserTheMostPopularTours } from "../../components/Layout/Main/UserTheMostPopularTours/UserTheMostPopularTours";

export function UserTheMostPopularToursPage() {
    return (
        <>
            <UserHeader />
            <UserTheMostPopularTours />
        </>
    );
}