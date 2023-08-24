import RestorentCard from './RestorentCard.js'
import { restaurantList, IMG_CDN_URL } from "../contants.js";
import { useContext, useEffect, useState } from 'react';
import Shimmer from './Shimmer.js';
import { FilterData } from '../utils/helper'
import useRestorentCard from '../utils/useRestorentCard.js';
import UserContext from '../utils/UserContext.js';


const Body =()=>{

    const [allRestorentData, setAllRestorentData]= useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filteredRestorents, setFilteredRestorents] = useState([]);

    const {user, setUser}= useContext(UserContext);

    const OnChangeValue =(e)=>{
        setInputValue(e.target.value)
    }
    
    const OnSearchClick =()=>{
        const filterList= FilterData(inputValue, allRestorentData )
        setFilteredRestorents(filterList)

    }

    useEffect(()=>{
        fetchAPIData();
    },[])

    
    async function fetchAPIData(){
        const data = await fetch(restaurantList)
        const JsonData=  await data?.json(); 
        console.log(JsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestorents(JsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setAllRestorentData(JsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 

    }
    
    return allRestorentData?.length===0 ? ( <Shimmer/>) : (
        <> 
            <div className="py-5 text-center" >
                <input data-testid="search-input" type="text" className="sm:w-96 w-60 h-10 pl-2 border in-range:border-green-500" placeholder="Search for restorent and food" value={inputValue} onChange={OnChangeValue}/>
                <button  data-testid="search-btn" className=" bg-orange-500  ml-3 p-2 px-4 text-white" type='button' onClick={OnSearchClick} >Search </button>
            </div>
            {/* <input className="border" value={user.name} onChange={(e)=>setUser({...user, name:e.target.value})} placeholder="Name"></input>  */}
            <div className="mx-11 border-b mb-2">
                <div className="font-bold text-2xl">{allRestorentData?.length} restaurants</div>
            </div>    
            <div className="grid sm:grid-cols-4 gap-4 grid-cols-1 justify-center align-middle sm:mx-7 w-50  sm:w-100 pb-4" data-testid="res-list">
                {
                    filteredRestorents?.map((resto)=>{
                        return   <RestorentCard {...resto.info} key={resto.info.id}/>
                    })
                }
            </div>
        </>
    )
}

export default Body;