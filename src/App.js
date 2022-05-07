import { useEffect, useState } from "react";

import { Route, Routes } from 'react-router';
import ItemsDetails from "./ItemsDetails";
import Items from "./Items";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./REDUX/ItemsSlice";
import CartModal from "./CartModal";

function App() {
  const{items , modalIsOpen} = useSelector((store)=>store.items);
  const dispatch = useDispatch();

  useEffect(()=>
  {
     dispatch(fetchData());
  },[]);



  return (
    <>
<Routes>
  <Route path="/*" element={<Items ITEMS={items}  />} />
   <Route  path="/item" element={<ItemsDetails /> }/>
 </Routes>
 {modalIsOpen===true && <CartModal/>}
 </>
  );
}

export default App;
