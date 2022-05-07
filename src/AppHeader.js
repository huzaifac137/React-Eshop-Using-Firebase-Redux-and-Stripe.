import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import { setModal } from './REDUX/ItemsSlice';

function AppHeader(props) {
    
    const dispatch = useDispatch();

    const{cartAmount} = useSelector((store)=> store.items);

    const modalHandler=()=>
    {
     dispatch(setModal());
    }

    return (
        <header style={{display:"flex" , alignItems:"center" , justifyContent:"space-around" , border:"1px solid black" , marginBottom:"20px" , padding:"5px"}}>
            <h2> HE'S LITTERLY ME FR SHOP </h2>
            <button onClick={modalHandler}
             style={{background:"transparent" , display:"flex" , alignItems:"center" , justifyContent:"center" , borderRadius:"10px" , height:"40px" }}>
                <AiOutlineShoppingCart style={{fontSize:"25px" , cursor:"pointer"}}/> 
                  <h3 style={{ marginBottom:"20px" }}>
                      {cartAmount}
                  </h3>
            </button>
            </header>
    );
}

export default AppHeader;