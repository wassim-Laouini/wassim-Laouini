import React, { useState } from "react";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFoundView from "./screens/NotFoundView";
import AuthService from "./services/authService";
import AdminPanel from "./screens/AdminPanel";
import { Main as MainLayout } from "./layouts";
import ContactUs from "./screens/ContactUS/ContactUs";
import Services from "./screens/Services";
import Login from "./screens/Login";
//* we're using react-router-dom package to handle navigation in our app
//! here we can add as many pages/routes we want (creation happens in screens folder and then import here)
//! componenets folder is for the components that are reusable from page to page

const RoutesComponent = () => {
    let path = "/";
    const userData =
        localStorage.getItem("user_data_BBH") !== undefined
            ? localStorage.getItem("user_data_BBH")
            : {};
    if (userData && userData.is_admin) {
        path = "/";
    } else if (userData && !userData.is_admin) {
        path = "/adminPanel";
    }
    //! not gonna use path value for the moment till token is done (backend)
    let userType = "admin";
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/NotFoundPage" element={<NotFoundView />} />
                <Route path="*" element={<Navigate to="/NotFoundPage" />} />
                //* authenticated routes will display here
                <Route
                    path="/Services"
                    element={
                        <MainLayout>
                            <Services />
                        </MainLayout>
                    }
                />
                <Route
                    path="/AboutUs"
                    element={
                        <MainLayout>
                            <AboutUs />
                        </MainLayout>
                    }
                />
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Home />
                        </MainLayout>
                    }
                />
                <Route
                    path="/ContactUs"
                    element={
                        <MainLayout>
                            <ContactUs />
                        </MainLayout>
                    }
                />
                <Route path="/adminPanel/login" element={<Login />} />
                <Route
                    path="/adminPanel/login/abfbjjcdldss3sd2ffqq2sd5q3sd2qdas5dhjfg5hk2gh6"
                    //! for the moment all can access the admin panel till the token is handled in the backend then we can use it only after log in
                    element={
                        AuthService.checkRoute(userType) ? (
                            <AdminPanel />
                        ) : (
                            <Navigate to="/" />
                        )
                    }
                />
                //* UnauthenticatedRoute routes will display here
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;
