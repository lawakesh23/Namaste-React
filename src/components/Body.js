import RestorentCard from './RestorentCard.js'
import { restaurantList, IMG_CDN_URL } from "../contants.js";
import { useState } from 'react';


const Body =()=>{
    const [inputValue, setInputValue] = useState("");
    const [restorents, setRestorents] = useState(restaurantList);

    const OnChangeValue =(e)=>{
        setInputValue(e.target.value)
    }

     function FilterData(inputValue, restorents){
      return restorents.filter((restorent)=>
             restorent.data.name.includes(inputValue)
            
        );
    }
    const OnSearchClick =()=>{
        const filterList= FilterData(inputValue, restorents )
        setRestorents(filterList)
    }


    return(
        <>
            {/* <SearchBar/> */}
            <div className="search-bar">
                <input type="text" placeholder="Search your Food/ Restorent" value={inputValue} onChange={OnChangeValue}/>
                <button type='button' onClick={OnSearchClick} >Search </button>
            </div>
            <div className="card-flex-list">
                {
                    restorents.map((resto)=>{
                        return   <RestorentCard {...resto.data} key={resto.data.id}/>
                    })
                }
            </div>
        </>
    )
}

export default Body;