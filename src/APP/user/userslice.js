import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentuser:null,
    error:null,
    loading:false,
};

const userslice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signinstart: (state)=>{
            state.loading = true
        },
        signinsucces: (state, action)=>{
            state.currentuser=action.payload;
            state.loading=false;
            state.error=null
        },
        signinfailue:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        userupdate:(state,action)=>{
            state.currentuser=action.payload;
            state.loading=false;
            state.error=null
        },
        deleteuser:(state)=>{
            state.currentuser=null;
            state.error=null;
            state.loading=false;
        }
        

    }
});
export const {signinstart,signinfailue,signinsucces,userupdate,deleteuser}= userslice.actions;
export default userslice.reducer;