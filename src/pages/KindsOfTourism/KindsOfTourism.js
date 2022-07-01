import * as React from 'react';
import {MainHeader} from "../../components/Layout/Header/MainHeader";
import {MainKindsOfTourism} from "../../components/Layout/Main/MainKindsOfTourism/MainKindsOfTourism";

export function KindsOfTourism() {
    return (
        <div>
            <MainHeader/>
            <MainKindsOfTourism />
        </div>
    );
};