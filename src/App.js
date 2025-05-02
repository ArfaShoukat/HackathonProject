
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import DonateCard from './components/DonateCard'


function App() {
 

  return (
    <Router>
      <Navbar />
      <DonateCard/>
     
    </Router>
  );
}

export default App;
