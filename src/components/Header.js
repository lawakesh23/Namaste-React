import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom'


const logInUser=()=>{
    return false;
}


const Title = ()=>(
    // <h1 className="title" id="main"> Namaste React</h1>
    <Link to="./"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/portal/c/logo_2022.png"/></Link>
);


const Header =()=>{
    const [isLogIn, setisLogIn] = useState(true);
   return(
      <div className="header">
          <Title/>
          <div className="nav-bar">
              <ul>
                    <li className="d-center">
                        <Link to='./'><div className="p-left-8">Home</div> </Link>
                    </li>

                    <li className="d-center">
                        <Link to ="./offers"><div className="p-left-8">Offers <sup className="font-theme-color"> <b>New</b></sup></div> </Link>
                    </li>

                    <li className="d-center">
                        <Link to='./help'><div className="p-left-8">Help</div> </Link>
                    </li>                                
                    <li className="d-center">
                        <Link to='./about'><div className="p-left-8">About Us</div></Link>
                    </li>
                    <li className="d-center">
                       <Link to="./contact"><div className="p-left-8">Contact</div></Link> 
                    </li>
                    <li className="d-center">
                        <Link to='./cart'><div className="p-left-8">Cart</div></Link>
                    </li>

                    <li className="d-center">
                        <Link to='./login'>
                            {(isLogIn ? <button variant="contained" onClick={()=>setisLogIn(false)}> Sign In </button> :  <button variant="contained" onClick={()=>setisLogIn(true)}>Signout</button>)
                            }
                      </Link>
                    </li>
              </ul>
          </div>

      </div>
   )
};

export default Header;