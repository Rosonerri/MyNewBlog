import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import HomeScreen from "../Components/Pages/HomeScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomeScreen /> }],
  },
  {},
]);
