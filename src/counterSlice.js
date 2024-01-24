import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    conter1 : 0
}

const counterSlice = createSlice ({
    name: 'counter',
    initialState,
    reducers : {
        increment : (state,action) => {
            state.conter1 = state.conter1 + 1

        },
        decrenent : (state)=> {
            if(state.conter1 > 0)
            state.conter1 = state.conter1 - 1
        }
    }

}) 
export const {increment, decrenent} = counterSlice.actions
export default counterSlice.reducer;