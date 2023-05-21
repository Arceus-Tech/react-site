import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar'

const App = () => {
  
  return (
    <div>
      <NavBar />
      <div className='h-screen pt-20 bg-slate-950 px-5 md:px-16 lg:px-32 py-5'>
        <h1>Empowering Your Financial Journey</h1>
      </div>
    </div>
  );
};

export default App;