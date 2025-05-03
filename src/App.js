import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "../src/config/AppRouter";

function App() {
  return <RouterProvider router={AppRouter} />;
}

export default App;
