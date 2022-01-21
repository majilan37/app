import { useState } from 'react';

function Form({ todos, setTodos}) {
    const [todo, setTodo] = useState('');

    // submit todo
    const submitTodo = (e) => {
        e.preventDefault();
        if(!todo || !todo.trim()) return;

        let newTodo = todos.push({
            id: Date.now(),
            title: todo
        })
        
        setTodos([...todos], newTodo);
        setTodo('')
    }
    
  return (
    <div>
        <form onSubmit={submitTodo} action="">
            <input 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)} 
                type="text"
            />
            <button>Add</button>
        </form>
    </div>
  );
}

export default Form;

