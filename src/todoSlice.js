import { createSlice } from "@reduxjs/toolkit";




const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), name: action.payload, done: false });
            // console.log();

        },
        tododelete: (state, action) => {
            if (window.confirm('Are You Sure....?')) {
                return state.filter((todo) => todo.id !== action.payload)
                // console.log('====================================');
                // console.log(action.payload);
                // console.log('====================================');
                // console.log(action.payload);
            }
        },
        update: (state, action) => {
            const { updatedName, oldname } = action.payload;
            const index = state.findIndex((todo) => todo.id === oldname.id);
                state[index].name = updatedName;
        },
        strike: (state, action) => {
            const  index = action.payload;
            if (index !== -1) {
                state[index].done = !state[index].done;
            }
            console.log('====================================');
            console.log(  state[index].done);
            console.log('====================================');
        }
    },
});
export default todoSlice.reducer;
export const { addTodo, tododelete, update, strike } = todoSlice.actions;