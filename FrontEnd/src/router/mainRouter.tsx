import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import HomeScreen from "../Components/Pages/HomeScreen";
import SignIn from "../Auth/Sigin";
import Register from "../Auth/Register";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomeScreen /> }],
  },
  {
    path: "/login",
    index: true,
    element: <SignIn />,
  },
  {
    path: "/signup",
    index: true,
    element: <Register />,
  },
]);
