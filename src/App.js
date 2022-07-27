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
import { CitiesPage } from "./pages/CitiesPage/CitiesPage";
import { UserBookingPage } from "./pages/UserBookingPage/UserBookingPage";
import { UserOrdersPage } from "./pages/UserOrdersPage/UserOrdersPage";
import { UserTheMostPopularToursPage } from "./pages/UserTheMostPopularToursPage/UserTheMostPopularToursPage";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { UserKindsOfTourismPage } from "./pages/UserKindsOfTourismPage/UserKindsOfTourismPage";
import { UserCitiesPage } from "./pages/UserCitiesPage/UserCitiesPage";
import { AdminManagerWorkTime } from "./pages/AdminManagerWorkTime/AdminManagerWorkTime";
import { UserSelectedTourHotelPage } from "./pages/UserSelectedTourHotelPage/UserSelectedTourHotelPage";
import { UserViewSelectedTourHotelPage } from "./pages/UserViewSelectedTourHotelPage/UserViewSelectedTourHotelPage";
import { UserHotelsCatalogPage } from "./pages/UserHotelsCatalogPage/UserHotelsCatalogPage";
import { UserToursCatalogPage } from "./pages/UserToursCatalogPage/UserToursCatalogPage";
import { ToursCatalogPage } from "./pages/ToursCatalogPage/ToursCatalogPage";
import { HotelsCatalogPage } from "./pages/HotelsCatalogPage/HotelsCatalogPage";
import { TouristMemoPage } from "./pages/TouristMemoPage/TouristMemoPage";
import { UserTouristMemoPage } from "./pages/UserTouristMemoPage/UserTouristMemoPage";
import { ManagerMainPage } from "./pages/ManagerMainPage/ManagerMainPage";
import { ManagerKindsOfTourismPage } from "./pages/ManagerKindsOfTourismPage/ManagerKindsOfTourismPage";
import { ManagerCitiesPage } from "./pages/ManagerCitiesPage/ManagerCitiesPage";
import { ManagerHotelsCatalogPage } from "./pages/ManagerHotelsCatalogPage/ManagerHotelsCatalogPage";
import { ManagerToursCatalogPage } from "./pages/ManagerToursCatalogPage/ManagerToursCatalogPage";
import { ManagerBookingPage } from "./pages/ManagerBookingPage/ManagerBookingPage";

import './base.scss';

export function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<MainPage/>} exact></Route>

              <Route path="/authorize" element={<AuthPage/>} exact></Route>
              <Route path="/registration" element={<RegistrPage/>} exact></Route>

              <Route path="/cities" element={<CitiesPage />} exact></Route>
              <Route path="/kindsOfTourism" element={<KindsOfTourism />} exact></Route>
              <Route path="/review" element={<ReviewPage/>} exact></Route>
              <Route path="/aboutUs" element={<AboutUs />} exact></Route>
              <Route path="/toursCatalog" element={<ToursCatalogPage />} exact></Route>
              <Route path="/hotelsCatalog" element={<HotelsCatalogPage />} exact></Route>
              <Route path="/touristMemo" element={<TouristMemoPage />} exact></Route>

              <Route path="/adminMainPage" element={<AdminMainPage/>} exact></Route>
              <Route path="/adminViewManagerDetails" element={<AdminViewManagerDetails />} exact></Route>
              <Route path="/adminViewScheduleDetails" element={<AdminViewScheduleDetails />} exact></Route>
              <Route path="/adminViewHotelDetails" element={<AdminViewHotelDetails />} exact></Route>
              <Route path="/adminViewTourDetails" element={<AdminViewTourDetails />} exact></Route>
              <Route path="/adminManagerWorkTime" element={<AdminManagerWorkTime />} exact></Route>

              <Route path="/userMainPage" element={<UserMainPage/>} exact></Route>
              <Route path="/userPrivateData" element={<UserPrivateDataPage/>} exact></Route>
              <Route path="/userReviews" element={<UserReviewPage />} exact></Route>
              <Route path="/userBooking" element={<UserBookingPage />} exact></Route>
              <Route path="/userOrders" element={<UserOrdersPage />} exact></Route>
              <Route path="/userTheMostPopularTours" element={<UserTheMostPopularToursPage />} exact></Route>
              <Route path="/userKindsOfTourism" element={<UserKindsOfTourismPage />} exact></Route>
              <Route path="/userCities" element={<UserCitiesPage />} exact></Route>
              <Route path="/userSelectedTourHotel" element={<UserSelectedTourHotelPage />} exact></Route>
              <Route path="/userViewSelectedTourHotel" element={<UserViewSelectedTourHotelPage />} exact></Route>
              <Route path="/userHotelsCatalog" element={<UserHotelsCatalogPage />} exact></Route>
              <Route path="/userToursCatalog" element={<UserToursCatalogPage />} exact></Route>
              <Route path="/userTouristMemo" element={<UserTouristMemoPage />} exact></Route>

              <Route path="/managerMainPage" element={<ManagerMainPage />} exact></Route>
              <Route path="/managerKindsOfTourism" element={<ManagerKindsOfTourismPage />} exact></Route>
              <Route path="/managerCities" element={<ManagerCitiesPage />} exact></Route>
              <Route path="/managerHotelsCatalog" element={<ManagerHotelsCatalogPage />} exact></Route>
              <Route path="/managerToursCatalog" element={<ManagerToursCatalogPage />} exact></Route>
              <Route path="/managerBooking" element={<ManagerBookingPage />} exact></Route>
          </Routes>
      </>
  );
}

export default App;
