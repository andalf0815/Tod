import { useState } from 'react';

function TodoInput({ onAddClicked }) {
  const [todoText, setTodoText] = useState('');

  return (
    <div>
      <span>New Todo:</span>
      <input
        type='text'
        value={todoText}
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
      />
      <button onClick={() => onAddClicked && onAddClicked(todoText)}>Add</button>
    </div>
  );
}

export default TodoInput;
