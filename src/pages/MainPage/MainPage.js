import React from 'react';
import { MainHeader } from "../../components/Layout/Header/MainHeader";
import { Filter } from "../../components/Filter/Filter";
import {MainPageBlock} from "../../components/Layout/Main/MainPageBlock";

export function MainPage() {
    const [filter, SetFilter] = React.useState(null);

    let onClick = () => {
        SetFilter('all');
    }

    return (
        <div>
            <MainHeader/>
            <Filter applyFilter={onClick}/>
            <MainPageBlock />
            {/*<List filter/>*/}
        </div>
    );
};