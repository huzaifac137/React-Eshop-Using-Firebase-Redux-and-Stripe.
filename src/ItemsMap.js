import React, { useState } from 'react';
import { Link , useNavigate , Routes , Route } from 'react-router-dom';
import ItemsDetails from './ItemsDetails';

function ItemsMap({items}) {
  const navigate = useNavigate();

const handleClick=(item)=>
{
 
 navigate("/item" , {state : {item}})
}

    return (
      <>
        <div className="itemsMap">

        {items.map((item)=> <button key={item.id} style={{ border:"1px solid black" 
        , background:"transparent" , cursor:"pointer" , borderRadius:"20px" , overflow:"hidden" 
        , display:"flex" , flexDirection:"column"  , alignItems:"center" , justifyContent:"center" }}
         onClick={()=>handleClick(item)}>

          <img src={item.url} style={{width:"70%" , borderRadius:"20px" }} />
          <h2>{item.condition}</h2>
        </button>)} 

        </div> 

        </>
    );
}

export default ItemsMap;