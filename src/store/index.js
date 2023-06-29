import {configureStore} from "@reduxjs/toolkit";
import ProductReducer from "./Product";

const store = configureStore({
    reducer:{
        product:ProductReducer
    }
});

export default store;