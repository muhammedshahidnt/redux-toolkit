import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    age: 0,
}

const FormSlice = createSlice({
    name: 'Form',
    initialState,
    reducers: {
        submit: (state, action) => {
            state.name = action.payload.Name
            state.age = action.payload.Age
        }
    }
})
export default FormSlice.reducer
export const { submit } = FormSlice.actions
