import { restaurantList, IMG_CDN_URL } from "../contants.js";
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

 export default RestorentCard;