import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import CreateContactForm from '../Pages/Contact/CreateContactForm';
import AllContacts from '../Pages/Contact/AllContacts';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "createContactForm",
                element: <CreateContactForm />
            },
            {
                path:"allContacts",
                element: <AllContacts />
            }
        ]
    }
])

export default router
