import * as React from 'react';
import {MainHeader} from "../../components/Layout/Header/MainHeader";
import {MainKindsOfTourism} from "../../components/Layout/Main/MainKindsOfTourism/MainKindsOfTourism";
import { Footer } from "../../components/Layout/Footer/Footer";

export function KindsOfTourism() {
    return (
        <>
            <MainHeader />
            <MainKindsOfTourism />
            <Footer />
        </>
    );
}