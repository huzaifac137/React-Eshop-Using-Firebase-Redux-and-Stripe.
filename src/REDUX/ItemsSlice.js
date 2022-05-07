import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk("items" , async()=>{
  
       const response = await fetch("https://practice-prj-a37e9-default-rtdb.firebaseio.com/pics.json");
  
       const data = await response.json();
  
       const loadedData = [];
  
       for(const key in data)
       {
         loadedData.push({
           id : key ,
           url : data[key].url ,
           condition : data[key].condition ,
           price : data[key].price
         })
       };
       
       return loadedData;

});

const initialState = {
 items : [] ,
 cartAmount : 0 ,
 cartItems : [] ,
 cartTotalPrice : 0 ,
 perItemAmount : 1 ,
 modalIsOpen : false ,
 isLoading : false ,
 totalOrder : []
};

const ItemsSlice = createSlice({
   name :"items" ,
   initialState :initialState ,

   reducers : {
     addToCart : (state , action)=>
     {
          state.cartAmount = state.cartAmount + 1;
          const{price , url , condition , id , ItemAmount} = action.payload;
          const neww = { id,url , condition , price , ItemAmount};
          state.cartItems = [...state.cartItems ,neww ];
          state.totalOrder = state.cartItems;
          state.cartTotalPrice = state.cartTotalPrice + (price* state.perItemAmount);

          state.perItemAmount = 1;


     } ,

     setModal : (state)=>
     {
         state.modalIsOpen = !state.modalIsOpen;
     } ,

     increasePerItem : (state )=>
     {
         state.perItemAmount = state.perItemAmount +1 ;
        
     } ,

     decreasePerItem : (state )=>
     {

        if(state.perItemAmount===1)
        {
            return;
        }

         state.perItemAmount = state.perItemAmount -1 ;

     }  ,

     removeFromCart : (state, action)=>
     {
        const{item} = action.payload;

        state.cartItems = state.cartItems.filter((cartItem)=> cartItem.id!==item.id) ;
        state.cartAmount = state.cartAmount - 1 ;
        state.totalOrder = state.cartItems;
        state.cartTotalPrice =  state.cartTotalPrice - (item.price * item.ItemAmount);
     } ,

     clearCart : (state) =>
     {
         state.cartItems = [];
         state.totalOrder = [];
         state.cartTotalPrice = 0;
         state.cartAmount = 0;
         state.totalOrder= [];
     }
      
   }  , 

   OnClickingOrderButton :(state)=>
   {
     state.totalOrder = state.cartItems;
   } ,

   extraReducers : {
     [fetchData.fulfilled] : (state, action)=>
     {
         state.items = action.payload;
         state.isLoading = false;
     } ,

     [fetchData.pending] : (state , action)=>
     {
        state.isLoading  = true;
     }  ,

     [fetchData.rejected] : (state , action)=>
     {
        state.isLoading  = false;
     }  

   }

});

export const{addToCart , setModal , increasePerItem , decreasePerItem , removeFromCart , clearCart , OnClickingOrderButton} = ItemsSlice.actions;

export default ItemsSlice.reducer;