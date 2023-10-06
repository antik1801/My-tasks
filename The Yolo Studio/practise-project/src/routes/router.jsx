import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ErrorPage from '../pages/single/ErrorPage/ErrorPage'
import HomePageLayout from '../pages/single/ErrorPage/HomePageLayout'
import RegisterPage from '../pages/single/ErrorPage/RegisterPage'
import LoginPage from '../pages/shared/LoginPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePageLayout />
            },
            {
                path: "/register-page",
                element: <RegisterPage />
            },
            {
                path: "/login-page",
                element: <LoginPage />
            }
        ]
    }
])

export default router
