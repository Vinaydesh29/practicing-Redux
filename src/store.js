import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from './slice.js'
const Store = configureStore({
    reducer:{
        ApiStore:ApiSlice
    }
})