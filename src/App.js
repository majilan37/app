import { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
   const [todos, setTodos] = useState([
    {id : 1, title:'Watch Tv'},
    {id : 2, title:'Eat food'},
    {id : 3, title:'Go to gym'},
  ]);

  return (
    <div className='container'>
      <div className="">
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
