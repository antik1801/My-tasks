import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayouts from '../layouts/MainLayouts'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import HomePageLayout from '../pages/Home/HomePageLayout'
import DrawerLayouts from '../layouts/DrawerLayouts'
import PrivateRoute from './PrivateRoute'
import CSVUploader from '../pages/CSV/CSVUploader'
import UsingIframe from '../components/UsingIframe'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <HomePageLayout />
            },
            {
                path: "/login-page",
                element: <Login />
            },
            {
                path: "/register-page",
                element: <Register />

            },
            
        ]
    },
    {
        
            path:"/design",
            element: <UsingIframe />
        
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <DrawerLayouts /> </PrivateRoute>,
        children: [
            {
                path: "/dashboard/csv-uploader",
                element: <CSVUploader />
            },
            {
                path: "/dashboard/chart",
                element: <CSVUploader />
            }
        ]
    }
])

export default router
