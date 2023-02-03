import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom'


const logInUser=()=>{
    return false;
}


const Title = ()=>(
    // <h1 className="title" id="main"> Namaste React</h1>
    <Link to="./" className="flex justify-center"><img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/portal/c/logo_2022.png"/></Link>
);


const Header =()=>{
    const [isLogIn, setisLogIn] = useState(true);
   return(
    <div className="relative ">
        <div className="header sm:flex block justify-between items-center text-center border">
            <Title className=""/>
            <div className="nav-bar flex justify-center">
                <ul className="flex font-bold ">
                        <li className="sm:px-4 px-1  hover:text-orange-400">
                            <Link to='./'><div className="">Home</div> </Link>
                        </li>

                        <li className="sm:px-4 px-1  hover:text-orange-600">
                            <Link to ="./offers"><div className="">Offers <sup className="text-orange-600 animate-pulse"> <b>New</b></sup></div> </Link>
                        </li>

                        <li className="sm:px-4 px-1   hover:text-orange-600">
                            <Link to='./help'><div className="">Help</div> </Link>
                        </li>                                
                        <li className="sm:px-4 px-1   hover:text-orange-600">
                            <Link to='./about'><div className="">About Us</div></Link>
                        </li>
                        <li className="sm:px-4 px-1   hover:text-orange-600">
                        <Link to="./contact"><div className="">Contact</div></Link> 
                        </li>
                        <li className="sm:px-4 px-1   hover:text-orange-600">
                            <Link to='./cart'><div className="">Cart</div></Link>
                        </li>

                        <li className="sm:px-4 px-1   hover:text-orange-600">
                            <Link to='./login'>
                                {(isLogIn ? <button variant="contained" onClick={()=>setisLogIn(false)}> Sign In </button> :  <button variant="contained" onClick={()=>setisLogIn(true)}>Signout</button>)
                                }
                        </Link>
                        </li>
                </ul>
            </div>

        </div>
    </div>   
   )
};

export default Header;