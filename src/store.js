import CountSlice from './slice.js'
import { configureStore } from "@reduxjs/toolkit";
const Store = configureStore({
    reducer :{
     Count:CountSlice
    }
})
export default Store