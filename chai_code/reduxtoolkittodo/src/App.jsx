import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
    return (
      
        <div className='w-1/2 mx-auto'>
          <h1 className='text-3xl text-center font-bold text-cyan-500 mt-10'>Todo App</h1>
            <AddTodo />
            <Todos />
        </div>
    );
}

export default App;
