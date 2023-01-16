import RestorentCard from './RestorentCard.js'
import { restaurantList, IMG_CDN_URL } from "../contants.js";
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer.js';


const Body =()=>{
    const [allRestorentData, setAllRestorentData]= useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filteredRestorents, setFilteredRestorents] = useState([]);

    const OnChangeValue =(e)=>{
        setInputValue(e.target.value)
    }

    function FilterData(inputValue, filteredRestorents){
      return filteredRestorents.filter((restorent)=>
             restorent?.data?.name?.toLowerCase().includes(inputValue?.toLowerCase())
            
        );
    }
    const OnSearchClick =()=>{
        const filterList= FilterData(inputValue, allRestorentData )
        setFilteredRestorents(filterList)
    }

    useEffect(()=>{
        fetchAPIData();
    },[])


    async function fetchAPIData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const JsonData=  await data.json(); 
        //console.log(JsonData.data?.cards[2]?.data?.data?.cards)
        setFilteredRestorents(JsonData.data?.cards[2]?.data?.data?.cards)
        setAllRestorentData(JsonData.data?.cards[2]?.data?.data?.cards) 

    }

    return allRestorentData.length===0 ? ( <Shimmer/>) : (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Search your Food/ Restorent" value={inputValue} onChange={OnChangeValue}/>
                <button type='button' onClick={OnSearchClick} >Search </button>
            </div>
            <div className="card-flex-list">
                {
                    filteredRestorents.map((resto)=>{
                        return   <RestorentCard {...resto.data} key={resto.data.id}/>
                    })
                }
            </div>
        </>
    )
}

export default Body;