import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Layout } from "./pages/Layout";
import { Projects } from "./pages/Projects";




export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Projects />,
                index: true,

            }, 
            {
                path: '/about',
                element: <About />,

            },  
            {
                path: '/contact',
                element: <Contact />,

            }
        ]

    }
])