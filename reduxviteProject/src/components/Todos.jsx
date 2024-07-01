import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import './Todos.css';

function Todos() {
    const todos = useSelector(state => state.todos);  // it is an array from store ---> from rootSlice(name:'todo')
    const dispatch = useDispatch();  // use reducers

    return (
        <>
            <div className="todos-header">Todos</div>
            <div className="todos-list">
                {todos.map((todo) => (
                    <div key={todo.id} className="todo-item">
                        <h4>{todo.title}</h4>
                        <div className="todo-buttons">
                            <button 
                                className="delete-button" 
                                onClick={() => dispatch(removeTodo(todo.id))}
                            >
                                Delete
                            </button>
                            <button className="edit-button">Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Todos;
