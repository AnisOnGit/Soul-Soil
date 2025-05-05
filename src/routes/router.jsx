import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import AdvDetail from "../pages/AdvDetail.jsx";
import Error from "../pages/Error.jsx";
import Profile from "../pages/Profile.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import UpdateProfile from "../pages/UpdateProfile.jsx";
import Reset from "../pages/Reset.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/adventure.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/detail/:id",
        element: (
          <PrivateRoute>
            <AdvDetail></AdvDetail>
          </PrivateRoute>
        ),
        loader: () => fetch("/adventure.json"),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/update",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/reset",
        element: <Reset></Reset>,
      },
    ],
  },
]);

export default router;
