import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { Login, PageNotFound } from "../pages";
import LandingPage from "../layouts/LandingPage";
import GuestLayout from "../layouts/GuestLayout";
import UserDashboardLayout from "../layouts/UserDashboardLayout";
import UserDashboard from "../layouts/UserDashboard";
import UserProfile from "../layouts/UserProfile";

export const LOGIN_ROUTE = "/login";
export const REGISTER_ROUTE = "/register";
export const USER_DASHBOARD_ROUTE = "/dashboard";
export const USER_PROFILE_ROUTE = "/dashboard/profile";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    element: <GuestLayout />,
    children: [
      {
        path: LOGIN_ROUTE,
        element: <Login />,
      },
    ],
  },
  {
    element: <UserDashboardLayout />,
    children: [
        {
            path: USER_DASHBOARD_ROUTE,
            element: <UserDashboard />,
        },
        {
            path: USER_PROFILE_ROUTE,
            element: <UserProfile />,
        },
    ],
},
]);
