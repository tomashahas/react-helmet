import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import './style.css';

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/contact",
            element: <Contact />
        }
    ])

    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App