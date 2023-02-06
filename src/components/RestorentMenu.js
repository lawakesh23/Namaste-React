
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import { restaurantList, URL_Menu, IMG_CDN_URL } from "../contants.js";
import useRestorentMenu from "../utils/useRestorentMenu.js";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";
import store from "../utils/store.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RestorentMenu=()=>{
    const {refID} = useParams();
    //const RestoMenu = useRestorentMenu(refID); //Custom hooks
    const [restoMenu, setRestoMenu] = useState([]);
    const [filterMenu, setFilterMenu] = useState([]);
    const [inputData, setInputData] = useState("")
    const [restoDetails, setRestodetails] =useState([])
    const [countfilterNo, setCountFilerNo]= useState([])
    const dispatch= useDispatch();
    
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
            setCountFilerNo(filteredData)               
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
            const menuData = await getdata?.json();
            setRestoMenu(Object.values(menuData?.data?.menu?.items))
            setFilterMenu(Object.values(menuData?.data?.menu?.items))
            setRestodetails(menuData)
 
        }

     const addFoodItem=(item)=>{
        dispatch(addItem(item))

     }   
    const countAdded = useSelector((store)=> store.cart.items)

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
                <div className="text-white border p-5 m-4 relative">
                    <span className="absolute -top-6 -left-5 bg-black font-medium p-2 text-xl">OFFER</span>
                    <div> 50% off up to ₹100 | Use code TRYNEW</div>
                    <div>{restoDetails?.data?.aggregatedDiscountInfo.descriptionList[0].meta}</div>
                </div> 
            </div>
            <div className="py-3 text-center">
                
                <input type="text" className="pl-2 border sm:w-64 w-48 h-10" placeholder="Search food" value={inputData} onChange={InputDataOnchange}/>
                <button className="ml-2 bg-orange-400 w-20 h-10" onClick={MenuBtnSearch}>Search </button>
            </div>
            <div className="flex justify-around py-1 shadow">
                <div className="text-md font-bold">Total Menu Items - <span className="font-bold bg-green-700 text-white px-2 rounded">{restoMenu.length}</span></div>
                <div className="text-md font-bold">Total filter Items - <span className="font-bold bg-green-700 text-white px-2 rounded">{countfilterNo.length}</span></div>
            </div> 
            <Link to='./cart'>
                <div className="relative">
                    <div className="p-3 bg-orange-500 fixed top-50 right-0 rounded-l-full">
                        <div>Items added -<span className="font-bold px-2">{countAdded.length}</span></div>
                    </div> 
                </div>
            </Link>
            <div className="resto-menuList flex overflow-y-scroll scrollbar min-w-full flex-none px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-full"> 
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
                                 <button className="text-sm border-2 mt-2 bg-orange-400 text-white px-3 p-2 rounded-full hover:bg-white hover:text-black hover:border-2" onClick={()=>addFoodItem(item)}>Add to Cart</button>  
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