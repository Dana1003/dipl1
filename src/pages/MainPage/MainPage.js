import React from 'react';
import { MainHeader } from "../../components/Layout/Header/MainHeader";
import { Filter } from "../../components/Filter/Filter";
import {MainPageBlock} from "../../components/Layout/Main/MainPageBlock";
import {useDispatch, useSelector} from "react-redux";

export function MainPage() {
 /*   const [filter, SetFilter] = React.useState(null);

    let onClick = () => {
        SetFilter('all');
    }*/
/*    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    const addUser = (user) => {
        dispatch({type: "GET_USER", payload: user})
    };*/

    return (
        <div>
            <MainHeader/>
            {/*<Filter applyFilter={onClick}/>*/}
            <MainPageBlock />
 {/*           <button onClick={() => {addUser()}}>Нажми</button>*/}
        </div>
    );
};