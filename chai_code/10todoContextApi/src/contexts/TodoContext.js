/* eslint-disable no-unused-vars */
import {createContext,useContext} from 'react';

export const TodoContext = createContext({
    todos:{
        id:0,
        todo:'',
        completed:false
    },
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(todo,id)=>{},
    toggleTodo:(id)=>{}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}