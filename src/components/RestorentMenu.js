
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import { restaurantList, IMG_CDN_URL } from "../contants.js";

const RestorentMenu=()=>{
    const [RestoMenu, setRestoMenu] = useState(null);
    console.log("gggg",RestoMenu)
    const {refID} = useParams();

    async function fetchData(){
        const URLMenu="https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=";
        const getdata= await fetch(URLMenu + refID)
        const data = await getdata?.json();
        setRestoMenu(data)
        console.log("dddddddddd", data)

    }
    useEffect(()=>{
        fetchData();
    },[])

    return !RestoMenu ? (
        <Shimmer />
      ) :(
        <div>
            <div className="resto-menuBanner">
                <div className="banner-img">
                    <img  className="banner-img" alt="resto-banner" src={IMG_CDN_URL + RestoMenu?.data?.cloudinaryImageId}/>
                </div>
                <div className="resto-banner-details">
                    <h2>{RestoMenu?.data?.name}</h2>
                    <p>{RestoMenu?.data?.cuisines?.join(", ")}</p>
                    <p>{RestoMenu?.data?.area}</p>
                    <p>{RestoMenu?.data?.totalRatingsString}</p>
                    <p>{RestoMenu?.data?.costForTwoMsg}</p>
                    <p>{RestoMenu?.data?.sla?.lastMileDistanceString}</p>
                </div>
            </div>
            <div className="resto-menuList">
                <div className="menu-listing row no-gutters justify-content-center">
                    {Object.values(RestoMenu?.data.menu?.items).map((item) => {
                        return ( 
                            <div className="col-lg-4 item-details p-3 m-2"> 
                                <div className="col-lg-6">
                                    <h5 key={item.id}>{item.name}</h5>
                                    <span>Rs {item.price/100}</span>
                                    <p className="text-secondary">{item.category}</p>
                                    {/* <p>{item.description}</p> */}
                                 <button className="btn btn-success">Add to Cart</button>  
                                </div>
                                <div className='col-lg-6'>
                                    <img alt="menu-img" style={{ width: "190px", borderRadius:"12px"}} src={IMG_CDN_URL + item.cloudinaryImageId}/>
                                </div>
                            
                            </div>
                        )
                    })}
                </div>
                <div className="imge-content">
               
                   
                </div>
            </div>
        </div>
    )
}

export default RestorentMenu;