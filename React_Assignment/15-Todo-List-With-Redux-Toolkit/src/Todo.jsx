import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './redux/todoSlice';
import { useState } from 'react';

function Todo() {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos.todoList);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
