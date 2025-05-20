import Api from './slice.js'
import { configureStore } from "@reduxjs/toolkit";
const Store = configureStore({
    reducer :{
        ApiTunk:Api
    }
})
export default Store