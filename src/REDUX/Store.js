import { configureStore } from "@reduxjs/toolkit";
import ItemsReducer from "./ItemsSlice.js";

const store = configureStore({
    reducer : {
        items  : ItemsReducer
    }
})

export default store;