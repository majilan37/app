import React from 'react';

function TodoList({ todos, setTodos }) {
    const deleteTodo = (id) => {
        let newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }
  return (
    <div>
        {todos.map((todo) => (
            <div className='todo__item' key={todo.id}>
                <p>{todo.title}</p>
                <button onClick={() => deleteTodo(todo.id)} >delete</button>
            </div>
        ))}
    </div>
  );
}

export default TodoList;
