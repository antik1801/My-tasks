import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import HomepageLayout from "../pages/Homepage/HomepageLayout/HomepageLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <span>Error</span>,
    children: [
      {
        path: "/",
        element: <HomepageLayout /> ,
      },
    ],
  },
  {
    path: "/login",
    element: <p>Login</p>,
  },
  {
    path: "/signUp",
    element: <p>SignUP</p>,
  },
]);

export default router;
