import React from "react";
import {Route, Routes} from 'react-router-dom';
import {MainPage} from "./pages/MainPage/MainPage";
import {AuthPage} from "./pages/AuthPage/AuthPage";
import {RegistrPage} from "./pages/RegistrPage/RegistrPage";
import {AdminMainPage} from "./pages/AdminMainPage/AdminMainPage";
import {ReviewPage} from "./pages/ReviewPage/ReviewPage";
import {KindsOfTourism} from "./pages/KindsOfTourism/KindsOfTourism";
import {AdminAddManager} from "./pages/AdminAddManager/AdminAddManager";
import {AdminViewManagerDetails} from "./pages/AdminViewManagerDetails/AdminViewManagerDetails";
import {AdminAddSchedule} from "./pages/AdminAddSchedule/AdminAddSchedule";

import './base.scss';

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<MainPage/>} exact></Route>
              <Route path="/authorize" element={<AuthPage/>} exact></Route>
              <Route path="/kindsOfTourism" element={<KindsOfTourism />} exact></Route>
              <Route path="/review" element={<ReviewPage/>} exact></Route>
              <Route path="/adminMainPage" element={<AdminMainPage/>} exact></Route>
              <Route path="/addManager" element={<AdminAddManager />} exact></Route>
              <Route path="/viewManagerDetails" element={<AdminViewManagerDetails />} exact></Route>
              <Route path="/registration" element={<RegistrPage/>} exact></Route>
              <Route path="/adminAddSchedule" element={<AdminAddSchedule />} exact></Route>
          </Routes>
      </>
  );
}

export default App;
