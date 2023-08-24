import { restaurantList, IMG_CDN_URL } from "../contants.js";
import { Link } from "react-router-dom";
const RestorentCard=({ name, id, cuisines, area, cloudinaryImageId, locality, costForTwo, sla, avgRating, aggregatedDiscountInfoV3 })=>{
    // const { name, cuisines, area  } = restorent.data;,
     return(
         <>
         
         <div className="hover:shadow-lg hover:shadow-orange-500 mx-auto">
         <Link to={"./restorent/"+id}>
             <div className="p-4">
                 <img alt="resto-logo" className="" src={IMG_CDN_URL + cloudinaryImageId} />
                 <h5 className="pt-3  font-bold text-xl">{name}</h5>
                 <p className="text-base text-gray-600 pb-3 pt-2">{cuisines.join(", ")}</p>
                 <div className="flex justify-between align-middle pb-3">
                    <div className="flex bg-green-500 text-white px-2 rounded-sm">
                        <span>★ </span>
                        <div> {avgRating} </div>
                    </div>
                    <div>|</div>
                    <div>{sla?.slaString}</div>
                    <div>|</div>
                    <div>{costForTwo}</div>
                 </div>
              
                 <span className="text-sm"> Address : {locality} </span>
                 <div className="border-t pt-2 mt-2 ">
                    
                    <div className="animate-pulse font-medium text-orange-700">{aggregatedDiscountInfoV3?.header}</div>
                 </div>
     
             </div>
             </Link>
         </div>
         </>
      )
 }

 export default RestorentCard;