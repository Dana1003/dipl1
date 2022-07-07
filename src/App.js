import React from "react";
import { Route, Routes } from 'react-router-dom';
import { MainPage } from "./pages/MainPage/MainPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { RegistrPage } from "./pages/RegistrPage/RegistrPage";
import { AdminMainPage } from "./pages/AdminMainPage/AdminMainPage";
import { ReviewPage } from "./pages/ReviewPage/ReviewPage";
import { KindsOfTourism } from "./pages/KindsOfTourism/KindsOfTourism";
import { AdminAddManager } from "./pages/AdminAddManager/AdminAddManager";
import { AdminViewManagerDetails } from "./pages/AdminViewManagerDetails/AdminViewManagerDetails";
import { UserMainPage } from "./pages/UserMainPage/UserMainPage";

import './base.scss';
import {UserPrivateData} from "./pages/UserPrivateData/UserPrivateData";

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
              <Route path="/addManager" element={<AdminAddManager />} exact></Route>
              <Route path="/adminViewManagerDetails" element={<AdminViewManagerDetails />} exact></Route>

              <Route path="/userMainPage" element={<UserMainPage/>} exact></Route>
              <Route path="/userPrivateData" element={<UserPrivateData/>} exact></Route>
          </Routes>
      </>
  );
}

export default App;
