import React, { useEffect, useState, Component } from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Products from './pages/Products';
import ContactUsPage from './pages/ContactUsPage';
import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';

const App = () => {

  return (

    <div className=' overflow-x-hidden'>

      
      <Router>
      <ScrollToTop />

      
      <NavBar />


      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>


      <Footer />

      </Router>

      
    </div>

  );
};

export default App;