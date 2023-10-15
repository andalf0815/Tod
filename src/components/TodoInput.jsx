import '../styles/TodoInput.min.css';

import { useState } from 'react';

function TodoInput({ onAddClicked }) {
  const [todoText, setTodoText] = useState('');

  const handleAdd = () => {
    if (todoText) {
      onAddClicked && onAddClicked(todoText);
      setTodoText('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className='todo-input'>
      <span>New Todo:</span>
      <input
        type='text'
        value={todoText}
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button className="btn-add" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
