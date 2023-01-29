import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'
//import About from './components/About.js'
import Help from './components/Help.js'
import Contact from './components/Contact.js'
import Error from './components/Error.js'
import Offers from './components/Offers.js'
import Cart from './components/Cart.js'
import RestorentMenu from './components/RestorentMenu.js'
import Login from './components/Login.js'
import OnlineStatus from './components/OnlineStatus.js'
import Profile from './components/ProfileClassBased.js'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { lazy, Suspense } from 'react'

const About = lazy(()=> import('./components/About.js'));

const AppLayout=()=>{

    return(
        <>
            <Header />
            <Outlet/>
            <OnlineStatus/>
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
                element: (<Suspense fallback={<h1> Loading....</h1>}>
                            <About/>
                         </Suspense>),
                children: [
                    {
                    path:'profile',
                    element:<Profile/>

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
