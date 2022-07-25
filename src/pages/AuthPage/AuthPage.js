import React from 'react';
import { MainHeader } from "../../components/Layout/Header/MainHeader";
import { AuthorizeForm } from "../../Forms/AuthorizeForm/AuthorizeForm";

export function AuthPage() {
    return (
        <div>
            <MainHeader />
            <AuthorizeForm />
        </div>
    );
}