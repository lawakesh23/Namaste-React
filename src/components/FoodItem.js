
import {IMG_CDN_URL} from "../contants"

const FoodItem = ({name, cloudinaryImageId, price})=>{
    return(
        <>
            <div className="border p-2 m-2 w-48">
                <div className="font-xl text-gray-500 font-bold py-2">{name}</div>
                <div><img alt="food imaage" src={IMG_CDN_URL+cloudinaryImageId}/></div>
                <div className="py-2 text-center">Rs {price/100}</div>
                <div className="text-center border rounded mx-9 py-1">
                    <button className="bg-red-600 font-bold text-white rounded-full px-3">-</button>
                    <span className="p-2">1</span>
                    <button className="bg-green-600 font-bold text-white rounded-full px-3">+</button>
                </div>
            </div>
        </>
    )
}

export default FoodItem;