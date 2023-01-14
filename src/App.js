import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'

const AppLayout=()=>{
    return(
        <>
            <Header />
            <Body/>
            <Footer/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
