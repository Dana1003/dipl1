import React from "react";
import {Route, Routes} from 'react-router-dom';
import {MainPage} from "./pages/MainPage/MainPage";
import {AuthPage} from "./pages/AuthPage/AuthPage";
import {RegistrPage} from "./pages/RegistrPage/RegistrPage";
import {AdminMainPage} from "./pages/AdminMainPage/AdminMainPage";
import {ReviewPage} from "./pages/ReviewPage/ReviewPage";

import './base.scss';
import {KindsOfTourism} from "./pages/KindsOfTourism/KindsOfTourism";
import {AdminAddManager} from "./pages/AdminAddManager/AdminAddManager";

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
              <Route path="/registration" element={<RegistrPage/>} exact></Route>
          </Routes>
      </>
  );
}

export default App;
