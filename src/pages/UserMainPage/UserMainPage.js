import React from 'react';

import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { MainPageBlock } from "../../components/Layout/Main/MainPageBlock";

export function UserMainPage() {
    return (
        <>
            <UserHeader />
            <MainPageBlock />
        </>
    );
}