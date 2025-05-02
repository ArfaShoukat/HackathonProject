
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import DonateCard from "./components/DonateCard";
import AboutUs from "./pages/AboutUs";
import Home from './pages/Home'

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        { path: "/", element: <Home /> },
      { path: "/AboutUs", element: <AboutUs /> },
    ],
  },
]);

export default AppRouter;
