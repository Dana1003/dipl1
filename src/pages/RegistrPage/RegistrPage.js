import React from 'react';
import { MainHeader } from "../../components/Layout/Header/MainHeader";
import { RegistrationForm } from "../../Forms/RegistrationForm/RegistrationForm";

export function RegistrPage() {
    return (
        <>
            <MainHeader />
            <RegistrationForm />
        </>
    );
}