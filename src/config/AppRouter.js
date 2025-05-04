
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AboutUs from "../pages/AboutUs";
import Home from '../pages/Home'
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import DonateBlood from "../pages/DonateBlood";
import DonorList from "../pages/DonorList";
import DonorDashboard from "../pages/DonorDashboard";
import ContactUs from '../pages/ContactUs'
import NeedBlood from '../pages/NeedBlood'
import ViewRequests from '../pages/ViewRequests'


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
      { path: "/DonorList", element: <DonorList /> },
      { path: "/DonorDashboard", element: <DonorDashboard /> },
      { path: "/ContactUs", element: <ContactUs /> },
      { path: "/NeedBlood", element: <NeedBlood /> },
      { path: "/ViewRequests", element: <ViewRequests /> },
      ,




    ],
  },
]);

export default AppRouter;

