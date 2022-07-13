import React from "react";
import { Route, Routes } from 'react-router-dom';
import { MainPage } from "./pages/MainPage/MainPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { RegistrPage } from "./pages/RegistrPage/RegistrPage";
import { AdminMainPage } from "./pages/AdminMainPage/AdminMainPage";
import { ReviewPage } from "./pages/ReviewPage/ReviewPage";
import { KindsOfTourism } from "./pages/KindsOfTourism/KindsOfTourism";
import { AdminViewManagerDetails } from "./pages/AdminViewManagerDetails/AdminViewManagerDetails";
import { UserMainPage } from "./pages/UserMainPage/UserMainPage";
import { UserPrivateDataPage } from "./pages/UserPrivateDataPage/UserPrivateDataPage";

import './base.scss';

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<MainPage/>} exact></Route>

              <Route path="/authorize" element={<AuthPage/>} exact></Route>
              <Route path="/registration" element={<RegistrPage/>} exact></Route>

              <Route path="/kindsOfTourism" element={<KindsOfTourism />} exact></Route>
              <Route path="/review" element={<ReviewPage/>} exact></Route>

              <Route path="/adminMainPage" element={<AdminMainPage/>} exact></Route>
              <Route path="/adminViewManagerDetails" element={<AdminViewManagerDetails />} exact></Route>

              <Route path="/userMainPage" element={<UserMainPage/>} exact></Route>
              <Route path="/userPrivateData" element={<UserPrivateDataPage/>} exact></Route>
          </Routes>
      </>
  );
}

export default App;
