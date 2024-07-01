import  { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import './Todos.css';

function AddTodo() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

    return (
        <div className="form-container">
            <form onSubmit={addTodoHandler}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Add a new todo"
                />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button type="submit">Add Todo</button>
                
                </div>
            </form>
        </div>
    )
}

export default AddTodo;
