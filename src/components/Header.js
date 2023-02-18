import React from "react";
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import UserContext from "../utils/UserContext";
import OnlineStatus from "./OnlineStatus";


const logInUser=()=>{
    return false;
}



const Title = ()=>(
    // <h1 className="title" id="main"> Namaste React</h1>
    //<Link to="./" className="flex justify-center"><img  data-testid="logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/portal/c/logo_2022.png"/></Link>
    <Link to="./" className="flex justify-center"><img className="w-48" data-testid="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXZYHpGaHJ2LysDWPJE-2L-i3r7BXNFasNFWhdFbKGULdVZX2uGtoVhyozjLW2g3jHqc&usqp=CAU"/></Link>

    );


const Header =()=>{
    const [isLogIn, setisLogIn] = useState(true);
    const {user}= useContext(UserContext);
    
    const cartItem =useSelector((store)=> store.cart.items)

   return(
    <div className="relative bg-[#f7f7f7]">
        <div className="header sm:flex block justify-between items-center text-center border">
            <Title className=""/>
            <OnlineStatus className="absolute "/>
            <div className="nav-bar flex justify-center">
                <ul className="flex font-bold text-xs sm:text-lg pb-2">
                        <li className="sm:px-4 px-1 hover:text-orange-400">
                            <Link to='./'><div className="">Home</div> </Link>
                        </li>
                        {/* <li className="sm:px-4 px-1 hover:text-orange-600">
                            <Link to ="./offers"><div className="">Offers <sup className="text-orange-600 animate-pulse"> <b>New</b></sup></div> </Link>
                        </li> */}
                        <li className="sm:px-4 px-1  hover:text-orange-600">
                            <Link to='./instaMart'><div className="">InstaMart</div></Link>
                        </li> 
                        {/* <li className="sm:px-4 px-1   hover:text-orange-600">
                            <Link to='./help'><div className="">Help</div> </Link>
                        </li>                                 */}
                        <li className="sm:px-4 px-1   hover:text-orange-600">
                            <Link to='./about'><div className="">About Us</div></Link>
                        </li>
                        <li className="sm:px-4 px-1   hover:text-orange-600">
                        <Link to="./contact"><div className="">Contact</div></Link> 
                        </li>
                        <li className="sm:px-4 px-1   hover:text-orange-600">
                            <Link to='./cart'><div className="" >Cart <span className="bg-green-700 text-white px-2 rounded" data-testid="cart">{cartItem.length}</span> Items</div></Link>
                        </li>
                        <span>{user.name}</span>
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