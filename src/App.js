import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Help from './components/Help.js'
import Contact from './components/Contact.js'
import Error from './components/Error.js'
import Offers from './components/Offers.js'
import Cart from './components/Cart.js'
import RestorentMenu from './components/RestorentMenu.js'
import Login from './components/Login.js'
import Profile from './components/ProfileClassBased.js'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

const AppLayout=()=>{
    return(
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>,
                children: [
                    {
                    path:'profile',
                    element: <Profile/>
                    }
                ]
            },   
            {
                path: '/help',
                element: <Help/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/offer',
                element: <Offers/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/restorent/:refID',
                element: <RestorentMenu/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);
