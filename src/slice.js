import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk('ApiTunk/fetchData',async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()
    return data
})

const Api = createSlice({
    name:"api",
    initialState:{
        status :"",
        error : "",
        user:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.status = "Loading"
        }).addCase(fetchData.fulfilled,(state,action)=>{
            state.status = "success"
            state.user = action.payload
        }).addCase(fetchData.rejected,(state,action)=>{
            state.status = "error"
            state.error = action.error.message
        })
    }
})
export default Api.reducer