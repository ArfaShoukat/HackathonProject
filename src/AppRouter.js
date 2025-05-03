
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import DonateCard from "./components/DonateCard";
import AboutUs from "./pages/AboutUs";
import Home from './pages/Home'
import Signup from "./pages/Signup";
import Login from "./pages/Login";


const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        { path: "/", element: <Home /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/Login", element: <Login /> },
      
    ],
  },
]);

export default AppRouter;
