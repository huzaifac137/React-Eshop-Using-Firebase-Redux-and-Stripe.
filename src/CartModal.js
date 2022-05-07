import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decreasePerItem, increasePerItem, OnClickingOrderButton, removeFromCart, setModal } from './REDUX/ItemsSlice';
import {AiOutlineMinus} from "react-icons/ai";

function CartModal(props) {

    const[confirmOrder , setConfirmOrder] = useState(false);
    const[orderSuccess , setOrderSucess] = useState(false);

    const{totalOrder} = useSelector((store)=>store.items);

    const dispatch = useDispatch();

    const modalHandler=()=>
    {
      dispatch(setModal());
    }

    const removefromcartHandler=(item)=>
    {
        dispatch(removeFromCart({item})) ;
    }

    const orderHandler=()=>
    {
        
        dispatch(clearCart());
        setOrderSucess(true);

    }

    const clearCartHandler=()=>
    {
    dispatch(clearCart());
    }

    const preConfirmhandler=()=>
    {
        
        setConfirmOrder(true);
        console.log(totalOrder);
    }



    const{cartItems , cartTotalPrice , perItemAmount} = useSelector((store)=>store.items);
    return (
        
        <div className="cart-modal-container" >

  { confirmOrder===false ?
           <div className="cart-modal-modal" >
            
            { cartItems.length!==0 ? 
            <>
             { cartItems.map((item)=> <div className="cart-item" key={item.id} >
                 <img src={item.url} alt="" style={{width:"90%" , borderRadius:"10px"}}  />
                 <h3 >{item.condition}</h3>

                 <div style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
                 <h4 style={{color:"green"}}> ${item.price} </h4> 
                 <h3 style={{marginLeft:"10px" , border:"1px solid black" , padding:"2px" }}> x{item.ItemAmount} </h3>
                 </div>

                 <button onClick={()=>removefromcartHandler(item)}
                  style={{border:"none" , color:"red" , background:"transparent" , cursor:"pointer" 
               ,border:"1px solid black" , display:"flex" , alignItems:"center" , justifyContent:"center" , fontSize:"20px"}} > 
               <AiOutlineMinus/> REMOVE FROM CART
                </button>

                </div>
    )}  

          
          <h1>TOTAL : $ {cartTotalPrice} </h1>  
           </>  : 

          <h1> CART IS EMPTY </h1> }

 <>
{ totalOrder.length!==0 &&
<>
     <button onClick={()=>clearCartHandler()}
                  style={{border:"none" , color:"red" , background:"transparent" , cursor:"pointer" 
               ,border:"1px solid black" , display:"flex" , alignItems:"center" , justifyContent:"center" , fontSize:"20px"}} > 
               <AiOutlineMinus/> CLEAR THE CART
                </button>

           <button  style={{marginTop:"10px" , fontSize:"20px"}} onClick={preConfirmhandler} >
               ORDER
           </button>         
</> 
}
</>

           <button onClick={modalHandler} style={{fontSize:"20px" , marginTop:"10px"}}>
               CLOSE
           </button>

            </div> 
            :
   
            <div className="cart-modal-modal" style={{gap:"10px"}}> 
             { orderSuccess===false ?
             <>
             <h1> CONFIRM ORDER ? </h1>

            { totalOrder.map((order)=> <div 
            style={{marginTop:"10px" , border:"2px solid black" , display:"flex" , alignItems:"center" , justifyContent:"center" ,padding:"10px " ,gap:"10px"}}
             key={order.id}>
             <h3> {order.condition} </h3>
             <h3> ${order.price} x{order.ItemAmount} =  ${order.price * order.ItemAmount} </h3>
             </div> )  }

             <button onClick={orderHandler}>
               YES 
             </button>

             <button onClick={()=>setConfirmOrder(false)}>
             NO
             </button> 
             </> :

             <>
             <h1> ORDER SUCCESSFUL ! ! !</h1>
             <button onClick = {modalHandler} > CLOSE </button>
             </>
}
            </div>  
}
        </div>  

        
    );
}

export default CartModal;