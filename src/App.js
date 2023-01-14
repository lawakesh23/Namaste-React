import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurantList, IMG_CDN_URL } from "./contants.js";



const Title = ()=>(
      <h1 className="title" id="main"> Namaste React</h1>
);

const Header =()=>{
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
                </ul>
            </div>
        </div>
     );
};

const SearchBar=()=>{
    return(
        <div className="search-bar">
            <input type="text" placeholder="Search your Food/ Restorent"></input>
        </div>
    )
}

const RestorentCard=({ name, cuisines, area, cloudinaryImageId  })=>{
  
   // const { name, cuisines, area  } = restorent.data;
    return(
        <>
        <div className="restorent-list">
            <div className="list-item">
                <img alt="resto-logo" className="resto-img" src={IMG_CDN_URL + cloudinaryImageId} />
                <h4>{name}</h4>
                <h5>{cuisines.join(", ")}</h5>
                <span> Address : {area} </span>
                <div className="Resto-offer">60% off </div>
    
            </div>
        </div>
        </>
     )
}

const Body =()=>{
    return(
        <>
            <SearchBar/>
            <div className="card-flex-list">
                {
                    restaurantList.map((resto)=>{
                        return   <RestorentCard {...resto.data}/>
                    })
                }
            </div>
        </>
    )
}

const Footer =()=>{

}

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
