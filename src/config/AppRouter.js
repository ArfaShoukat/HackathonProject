
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AboutUs from "../pages/AboutUs";
import Home from '../pages/Home'
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import DonateBlood from "../pages/DonateBlood";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/Login", element: <Login /> },
      { path: "/DonateBlood", element: <DonateBlood /> },

    ],
  },
]);

export default AppRouter;

