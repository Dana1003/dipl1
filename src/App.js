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
import { UserReviewPage } from "./pages/UserReviewPage/UserReviewPage";
import { AdminViewScheduleDetails } from "./pages/AdminViewScheduleDetails/AdminViewScheduleDetails";
import { AdminViewHotelDetails } from "./pages/AdminViewHotelDatails/AdminViewHotelDetails";
import { AdminViewTourDetails } from "./pages/AdminViewTourDetails/AdminViewTourDetails";
import { Cities } from "./pages/CitiesPage/Cities";
import { UserBookingPage } from "./pages/UserBookingPage/UserBookingPage";
import { UserOrdersPage } from "./pages/UserOrdersPage/UserOrdersPage";
import { UserTheMostPopularToursPage } from "./pages/UserTheMostPopularToursPage/UserTheMostPopularToursPage";
import { AboutUs } from "./pages/AboutUs/AboutUs";

import './base.scss';

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<MainPage/>} exact></Route>

              <Route path="/authorize" element={<AuthPage/>} exact></Route>
              <Route path="/registration" element={<RegistrPage/>} exact></Route>

              <Route path="/cities" element={<Cities />} exact></Route>
              <Route path="/kindsOfTourism" element={<KindsOfTourism />} exact></Route>
              <Route path="/review" element={<ReviewPage/>} exact></Route>
              <Route path="/aboutUs" element={<AboutUs />} exact></Route>

              <Route path="/adminMainPage" element={<AdminMainPage/>} exact></Route>
              <Route path="/adminViewManagerDetails" element={<AdminViewManagerDetails />} exact></Route>
              <Route path="/adminViewScheduleDetails" element={<AdminViewScheduleDetails />} exact></Route>
              <Route path="/adminViewHotelDetails" element={<AdminViewHotelDetails />} exact></Route>
              <Route path="/adminViewTourDetails" element={<AdminViewTourDetails />} exact></Route>

              <Route path="/userMainPage" element={<UserMainPage/>} exact></Route>
              <Route path="/userPrivateData" element={<UserPrivateDataPage/>} exact></Route>
              <Route path="/userReviews" element={<UserReviewPage />} exact></Route>
              <Route path="/userBooking" element={<UserBookingPage />} exact></Route>
              <Route path="/userOrders" element={<UserOrdersPage />} exact></Route>
              <Route path="/theMostPopularTours" element={<UserTheMostPopularToursPage />} exact></Route>
          </Routes>
      </>
  );
}

export default App;
