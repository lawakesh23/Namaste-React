import { restaurantList, IMG_CDN_URL } from "../contants.js";
import { Link } from "react-router-dom";
const RestorentCard=({ name, id, cuisines, area, cloudinaryImageId, costForTwoString, slaString, avgRating, aggregatedDiscountInfo })=>{
    // const { name, cuisines, area  } = restorent.data;
     return(
         <>
         
         <div className="restorent-list">
         <Link to={"./restorent/"+id}>
             <div className="list-item p-3">
                 <img alt="resto-logo" className="resto-img" src={IMG_CDN_URL + cloudinaryImageId} />
                 <h5 className="pt-3">{name}</h5>
                 <p className="text-secondary">{cuisines.join(", ")}</p>
                 <div className="card-rating-section">
                    <div className="star-rating">
                        <span>★ </span>
                        <div> {avgRating} </div>
                    </div>
                    <div>|</div>
                    <div>{slaString}</div>
                    <div>|</div>
                    <div>{costForTwoString}</div>
                 </div>
              
                 <span className="font-13"> Address : {area} </span>
                 <div className="Resto-offer">
                    
                    <div>{aggregatedDiscountInfo.shortDescriptionList[0].meta}</div>
                 </div>
     
             </div>
             </Link>
         </div>
         </>
      )
 }

 export default RestorentCard;