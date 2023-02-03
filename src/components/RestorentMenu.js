
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import { restaurantList, URL_Menu, IMG_CDN_URL } from "../contants.js";
import useRestorentMenu from "../utils/useRestorentMenu.js";

const RestorentMenu=()=>{
    const {refID} = useParams();
    //const RestoMenu = useRestorentMenu(refID); //Custom hooks
    const [restoMenu, setRestoMenu] = useState([]);
    const [filterMenu, setFilterMenu] = useState([]);
    const [inputData, setInputData] = useState("")
    const [restoDetails, setRestodetails] =useState([])
    
        const InputDataOnchange =(e)=>{
            const searchData = e.target.value;
            setInputData(searchData)
            // console.log(searchData)
        }
        const MenuBtnSearch =()=>{  
            const filteredData = filterMenuData(inputData, restoMenu);
            setFilterMenu( filteredData); 
            console.log("New After clicked filteredData...", filteredData)
            console.log("After clicked filterMenu", filterMenu)                
        }
        
        function filterMenuData(inputData, restoMenu ){
            return restoMenu.filter((list)=>{
                return list?.name?.toLowerCase().includes(inputData.toLowerCase())
            })    
        }
        
        useEffect(()=>{
            fetchData();
        },[])

        async function fetchData(){ 
            const getdata= await fetch(URL_Menu + refID)
            const data1 = await getdata?.json();
            setRestoMenu(Object.values(data1?.data?.menu?.items))
            setFilterMenu(Object.values(data1?.data?.menu?.items))
            setRestodetails(data1)
 
        }


    return !restoMenu ? (
        <Shimmer/>
      ) :(
        <div className="relative">
            <div className="resto-menuBanner sm:flex bg-black py-8 sm:justify-evenly items-center block">
                <div className="banner-img w-64 sm:m-0 mx-auto">
                    <img  className="rounded" alt="resto-banner" src={IMG_CDN_URL + restoDetails?.data?.cloudinaryImageId}/>
                </div>
                <div className="resto-banner-details text-white text-center sm:py-0 py-3 ">
                    <h2 className="text-3xl border-b-2 mb-4 pb-2">{restoDetails?.data?.name}</h2>
                    <p className="text-xl py-2">{restoDetails?.data?.cuisines?.join(", ")}</p>
                    <p className="py-2">{restoDetails?.data?.area}</p>
                    <div className="flex text-center justify-center">
                        <p className="border-r px-2">{restoDetails?.data?.totalRatingsString}</p>
                        <p className="border-r px-2">{restoDetails?.data?.costForTwoMsg}</p>
                        <p className="px-2">{restoDetails?.data?.sla?.lastMileDistanceString}</p>
                    </div>    
                </div>
                <div className="text-white border-2 p-5 m-4 relative">
                    <span className="absolute -top-4 -left-3 bg-black font-medium p-2 text-md">OFFER</span>
                    <div> 50% off up to ₹100 | Use code TRYNEW</div>
                    <div>{restoMenu?.data?.aggregatedDiscountInfo.descriptionList[0].meta}</div>
                </div> 
            </div>
            <div className="py-3 text-center">
                <input type="text" className="pl-2 border w-64 h-10" placeholder="Search food" value={inputData} onChange={InputDataOnchange}/>
                <button className=" ml-2 bg-orange-400 w-20 h-10" onClick={MenuBtnSearch}>Search </button>
            </div>
            <div className="resto-menuList flex"> 
                <div className="grid sm:grid-cols-3 grid-cols-1 p-2">
                    {restoMenu && filterMenu.map((item,i) => {
                        return ( 
                            <div key={i} className="flex p-3 m-2 border-2 justify-between hover:shadow-lg hover:shadow-orange-500"> 
                                <div className="">                         
                                    {item.isBestSeller ? <span className="text-orange-400 font-medium"> ★ Bestseller</span> : <p></p>}
                                    <h5 className="text-md font-bold pt-2" key={item.id}>{item.name}</h5>
                                    <span className="py-2">Rs {item.price/100}</span>
                                    <p className="text-gray-500 pb-2">{item.category}</p>
                                    {item.isVeg ? <p className="text-sm">Veg</p>  :<p className="text-sm">Non-Veg</p>}
                                 <button className=" mt-2 bg-orange-400 text-white px-3 p-2 rounded-full">Add to Cart</button>  
                                </div>
                                <div className='flex align-center justify-center'>
                                    <img className="px-2" alt="menu-img" style={{ width: "190px", borderRadius:"12px"}} src={IMG_CDN_URL + item.cloudinaryImageId}/>
                                </div>                          
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RestorentMenu;