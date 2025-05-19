import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value :0
}
const CountSlice = createSlice({
    name:"Count",
    initialState,
    reducers:{
        inceBy1:(state)=>{
            state.value +=1
        },
        inceBy5 :(state)=>{
            state.value +=5
        }
        ,
        decBy1:(state)=>{
            state.value -=1
        },
        input :(state,action)=>{
            state.value += action.payload
        },
        reset:(state)=>{
            state.value = initialState.value
        }
    }
})
export const {inceBy1,inceBy5,decBy1,input,reset} = CountSlice.actions
export default CountSlice.reducer
