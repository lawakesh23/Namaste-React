import {useDispatch, useSelector} from 'react-redux';
import FoodItem from './FoodItem';
import {clearCart} from '../utils/cartSlice';



const Cart=()=>{

    const dispatch = useDispatch(store=> store.cart.items)
    const clearButton= ()=>{
        dispatch(clearCart())
    }

    const cartItems = useSelector((store)=>store.cart.items);
    console.log("Inside cart ", cartItems)

    const initialValue=0;
     const totalAmount =  cartItems.reduce((acc, cartItems)=>
          acc + (cartItems.price)/100,
          initialValue         
         )                 

    return(
        <>
            <div className="py-2">
                <span>This is cart Section </span>
                <span className="my-5">
                    <button className="bg-red-500 px-2 text-white rounded" onClick={()=>clearButton()}>Clear All</button>
                </span> 
            </div>  
            <div clasName="grid grid-cols-12 flex"> 
                <div className="grid grid-cols-4 col-span-3">              
                    {/* <h1>{cartItems[0].name}</h1> */}
                    {
                        cartItems.map((cartItems)=>{
                        return <FoodItem {...cartItems}/>
                        })
                        
                    }
                </div>
                <div className="grid grid-cols-1 w-96 bg-gray-400 rounded">
                    <div className="">
                        <div className="text-center font-bold bg-green-600 py-2 text-white">Bill Details</div>
                        {
                            cartItems.map((cartItems)=>{
                             return( <>
                                     <div className="flex justify-between border px-2">
                                        <div className="w-64">{cartItems.name} </div>
                                        <div>Rs {cartItems.price/100}</div>
                                     </div>     
                                 </>
                             )})                 
                        }
                        <div className="flex justify-between border px-2 text-gray-600">
                            <div>Total Items : </div>
                            <div>{cartItems.length}</div>
                        </div> 
                        <div className="flex justify-between border p-2 border-t bg-green-600 text-white">  
                            <div className="font-bold ">TO PAY : </div>
                            <div className="font-bold"> Rs {totalAmount}</div>
                        </div>    
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Cart;