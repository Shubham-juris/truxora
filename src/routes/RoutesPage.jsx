import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Services from "../pages/Services";
import AboutPage from "../pages/AboutPage";
import ContactUs from "../pages/ContactUs";
import ScrollToTop from "../components/toptoscrol/Toptoscroll";

const RoutesPage = () => {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    </>
  );
};

export default RoutesPage;
