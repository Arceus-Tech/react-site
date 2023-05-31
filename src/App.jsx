import React, { useEffect, useState, Component } from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Products from './pages/Products';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    < Router>
      <div className=' overflow-x-hidden'>

          <NavBar />

          <Routes>
            <Route exact path="/" component={<LandingPage />} ></Route>
            <Route path="/about" component={<Products />} exact={true} ></Route>
          </Routes>

        <Footer />

      </div>
      </ Router>
  );
};

export default App;