import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id: 1,
            text: "Learn React",
            // completed: false
        },

    ],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: { // property and function
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }

    }
})

export const { addTodo, removeTodo } = todoSlice.actions        // get access to actions

export default todoSlice.reducer    // gives access to state