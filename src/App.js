
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import DonateCard from './components/DonateCard'
// import Layout from './components/Layout';

// import AppRoutes from './AppRouter';
// function App() {
 

//   return (
//   <Layout/>
//   );
// }

// export default App;




import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";

function App() {
  return <RouterProvider router={AppRouter} />;
}

export default App;
