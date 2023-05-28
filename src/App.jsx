import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import HeroSection from './partials/HeroSection';
import FeaturesSection from './partials/FeaturesSection';
import IconSection from './partials/IconSection';
import StatsSection from './partials/StatsSection';
import BlogSection from './partials/BlogSection';
import FaqSection from './partials/FaqSection';
import Testimonials from './partials/Testimonials';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';



const App = () => {
  
  return (
    <div className=' overflow-x-hidden'>
      <NavBar />
      <HeroSection/>
      <FeaturesSection/>
      <IconSection/>
      <StatsSection/>
      <BlogSection/>
      <Testimonials/>
      <FaqSection/>
      <ContactUs/>
      <Footer/>
      
    </div>
  );
};

export default App;