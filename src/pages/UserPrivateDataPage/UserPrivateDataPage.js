import React from 'react';

import { UserHeader } from "../../components/Layout/Header/UserHeader";
import { PrivateDataForm } from "../../Forms/PrivateDataForm/PrivateDataForm";

export function UserPrivateDataPage() {

    return (
        <>
            <UserHeader />
            <PrivateDataForm />
        </>
    );
}