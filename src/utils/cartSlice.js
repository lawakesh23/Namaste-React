import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: [],
        enabled: 1,
        total:0
    },
    reducers:{
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state, action)=>{
            // state.items.map((id) => (console.log("hi", id)))
            
            const itemID = action.payload;
            console.log( state.items)
            state.items= state.items.filter((item)=> item.id !== itemID)
        },
        increaseItem:(state, {payload}) =>{
            console.log("midhi", payload.id)
            const cartItem1 = state.items.find((item)=>  { return item.id === payload.id});
            console.log("lakkd....", cartItem1.enabled)
             cartItem1.enabled= cartItem1.enabled + 1;
        },
        decreaseItem:(state, {payload}) =>{
            console.log("midhi", payload.id)
            const cartItem1 = state.items.find((item)=>  { return item.id === payload.id});
            console.log("lakkd....", cartItem1.enabled)
             cartItem1.enabled= cartItem1.enabled - 1;
        },
        calculateTotals: (state) => {
            let enabled = 0;
            let total = 0;
            state.items.forEach((item) => {
                enabled += item.enabled;
              total += item.enabled * item.price;
            });
            state.enabled = enabled;
            state.total = total;
        },
        clearCart: (state)=>{
            state.items=[];
        },
    },

});


export const {addItem, removeItem, clearCart, increaseItem, decreaseItem, calculateTotals}= cartSlice.actions;

export default cartSlice.reducer;