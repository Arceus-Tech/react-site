import React from 'react'
import HeroSection from '../partials/HeroSection'
import FeaturesSection from '../partials/FeaturesSection'
import StatsSection from '../partials/StatsSection'
import BlogSection from '../partials/BlogSection'
import Testimonials from '../partials/Testimonials'
import FaqSection from '../partials/FaqSection'
import ContactUs from '../components/ContactUs'

function LandingPage() {
  return (
    <>
    <HeroSection/>
    <FeaturesSection/>
    <StatsSection/>
    <BlogSection/>
    <Testimonials/>
    <FaqSection/>
    <ContactUs/></>
    
  )
}

export default LandingPage