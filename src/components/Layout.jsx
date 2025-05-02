
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';



const Layout = () => {
  return (
    <>
      <Navbar />
 
      
      <Outlet /> {/* This renders DonateCard, AboutUs, etc. based on route */}
    </>
  );
};

export default Layout;



