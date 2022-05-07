import React from 'react';
import ItemsMap from "./ItemsMap";

import AppHeader from './AppHeader';
import CartModal from './CartModal';
import { useSelector } from 'react-redux';

function Items({ITEMS , modal}) {
    const{isLoading} = useSelector((store)=>store.items);
    return (
        <div > 
          
        <AppHeader/>
        { isLoading===false ?
        <ItemsMap  items={ITEMS} />  : <h1>LOADING.........</h1>
}
       </div>
    );
}

export default Items;