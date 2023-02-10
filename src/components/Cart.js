import {useDispatch, useSelector} from 'react-redux';
import FoodItem from './FoodItem';
import {clearCart, removeItem, increaseItem, decreaseItem, calculateTotals} from '../utils/cartSlice';
import { useEffect } from 'react';



const Cart=()=>{

    const dispatch = useDispatch(store=> store.cart.items)
    const cartItems = useSelector((store)=>store.cart.items);
    const clearButton= ()=>{
        dispatch(clearCart())
    }

    const deleteItem=(id )=>{
            console.log("id is ...", id)
            dispatch(removeItem(id))
    }
    const incresebyOne=(id)=>{
        dispatch(increaseItem({id}))
    }  
    const decresebyOne=(id)=>{
        if(cartItems.enabled==1){
            dispatch(removeItem(id))
            return;
        }
        dispatch(decreaseItem({id}))
    }  

    useEffect(()=>{
        dispatch(calculateTotals())
    },[cartItems])
    

    console.log("Inside cart ", cartItems)

    const initialValue=0;
    const totalAmount =  cartItems.reduce((acc, cartItems)=>
          acc + (cartItems.price)/100,
          initialValue         
         )                  
    console.log("cartItems", cartItems )
    return(
        <>
            <div className="py-2 text-center">
                <span className="text-2xl font-bold"> Cart Details </span>

            </div> 
            <span className="my-5 ml-8">
                    <button className="bg-red-500 px-2 text-white rounded pr-2 mr-2" onClick={()=>clearButton()}>Clear All</button>
            </span>  
            <div className="grid sm:grid-cols-2 grid-cols-1"> 
                <div className="flex grid-cols-2 flex-wrap gap-3 overflow-y-scroll scrollbar flex-none px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-3.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-screen">              
                    {/* <h1>{cartItems[0].name}</h1> */}
                    {
                        cartItems.map((cartItems)=>{
                        return <FoodItem {...cartItems}/>
                        })
                        
                    }
                </div>
                <div className="flex flex-col gap-2 ">
                    <div className="px-4">
                        <div className="text-center font-bold bg-green-600 py-2 text-white mb-2">Bill Details</div>
                        <div className="min-h-96 bg-gray-300 rounded overflow-y-scroll scrollbar flex-none px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-3.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-64">
                        {
                            cartItems.map((cartItems)=>{
                             return( <>
                                     <div className="flex justify-between border px-2">
                                        <div className="w-56">{cartItems.name} </div>
                                        <div className="text-center  mx-5 py-1">
                                            <button className="bg-red-600 font-bold text-white rounded-full px-3" onClick={()=>decresebyOne(cartItems.id)}>-</button>
                                            <span className="p-2" >{cartItems.enabled}</span>
                                            <button className="bg-green-600 font-bold text-white rounded-full px-3" onClick={()=>incresebyOne(cartItems.id)}>+</button>
                                            <button className="px-2" onClick={()=>deleteItem(cartItems.id)}>Delete</button>
                                        </div>
                                        <div>Rs {cartItems.price/100}</div>
                                     </div>     
                                 </>
                             )})                 
                        }
                        </div>
                        <div className="flex justify-between border px-2 text-gray-600 mt-2 ">
                            <div>Total Items : </div>
                            <div>{cartItems.length}</div>
                        </div> 
                        <div className="flex justify-between border px-2 text-gray-600 mt-2 text-sm">
                            <div>Delivery Fee : </div>
                            <div>-</div>
                        </div>
                        <div className="flex justify-between border px-2 text-gray-600 my-2 text-sm">
                            <div>Govt Taxes & Other Charges :  </div>
                            <div>-</div>
                        </div>
                        <div className="flex justify-between border p-2 border-t bg-green-600 text-white">  
                            <div className="font-bold ">TO PAY : </div>
                            <div className="font-bold"> Rs {totalAmount}</div>
                        </div>    
                        <button className="w-full bg-green-200 text-green-900 text-center py-3 my-2 border-green-800 border">
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Cart;