import React from "react";
import { useState } from "react";

const logInUser=()=>{
    return false;
}


const Title = ()=>(
    <h1 className="title" id="main"> Namaste React</h1>
);

const Header =()=>{
    const [isLogIn, setisLogIn] = useState(true);
   return(
      <div className="header">
          <Title/>
          <div className="nav-bar">
              <ul>
                  <li>Offers</li>
                  <li>Help</li>
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Cart</li>
                <li>
                    {(isLogIn ? <button onClick={()=>setisLogIn(false)}>Login</button> :  <button onClick={()=>setisLogIn(true)}>Signout</button>)
                    }
                </li>
              </ul>
          </div>
         
      </div>
   )
};

export default Header;