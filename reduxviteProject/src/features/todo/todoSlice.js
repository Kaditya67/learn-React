import { createSlice, nanoid } from "@reduxjs/toolkit";

// createSlice --> to create Slice
// nanoid --> to generate unique id

const initialState = {
    todos: [
        {
            id: 1,
            title: "Learn Redux",
        },
    ],
};

export const todoSlice = createSlice({
    name: "todo",  // name of slice
    initialState,  // define the initial state of slice/store
    reducers: {
        addTodo: (state, action) => {  // define function ---> do not call
            // get access of two things ---> state and action
            const todo = {
                id: nanoid(),
                title: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, title } = action.payload;
            const existingTodo = state.todos.find((todo) => todo.id === id);
            if (existingTodo) {
                existingTodo.title = title;
            }
        },
    },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;  // give to store
