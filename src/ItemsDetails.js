import React from 'react';
import { useLocation } from 'react-router';
import AppHeader from './AppHeader';
import {AiOutlinePlus , AiOutlineMinusSquare , AiOutlinePlusSquare} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreasePerItem, increasePerItem } from './REDUX/ItemsSlice';


function ItemsDetails() {

    const{perItemAmount} = useSelector((store)=>store.items);

    const dispatch = useDispatch();

    const addCartHandler=(item)=>
    {
        dispatch(addToCart({id : Math.random() ,url : item.url , price : item.price , condition : item.condition , ItemAmount :perItemAmount}));
    }

    const location = useLocation();
    const{item} = location.state;
    return (
        <>
        <AppHeader/>
        <div className="itemDetails">

            <div className="img-container" >
             <img src={item.url} className="img" />
            </div>

            <div style={{display:"flex"  , flexDirection:"column" ,alignItems:"center" , justifyContent:"space-evenly"  }} >

            <h2> {item.condition} </h2>
            <h3 style={{color:"green"}}> ${item.price}</h3>

            <div style={{display:"flex" , alignItems:"center" , justifyContent:"space-evenly"}}>
           <button onClick={()=>dispatch(increasePerItem())}
            style={{background:"transparent" , border:"none"}}> <AiOutlinePlusSquare style={{fontSize:"30px"}}  /> </button>

          <h3> {perItemAmount} </h3>

     <button onClick={()=>dispatch(decreasePerItem())}
      style={{background:"transparent" , border:"none"}} > <AiOutlineMinusSquare  style={{fontSize:"30px"}}  /> </button>
        </div>

            <button style={{border:"none" , color:"red" , background:"transparent" , cursor:"pointer" 
            ,border:"1px solid black" , display:"flex" , alignItems:"center" , justifyContent:"center" , fontSize:"25px"}} onClick={()=>addCartHandler(item , perItemAmount)}> 
               <AiOutlinePlus/> ADD TO CART
                </button>

            </div>


        </div>

        </>
    );
}

export default ItemsDetails;