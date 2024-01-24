import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import formSlice from "./formSlice";
import todoReducer from "./todoSlice";

const store = configureStore ({
    reducer: {
        counter : counterSlice,
        Form : formSlice,
        todos : todoReducer 
    }
})
export default store