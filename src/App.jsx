import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { css } from '@emotion/css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className='app'>
        <TodoInput
          onAddClicked={(todoText) => {
            setTodos((oldTodos) => [...oldTodos, { id: (Date.now()).toString(), text: todoText, done: false }]);
            console.log(todos);
          }}
        />
        <TodoList
          todos={todos}
          onDoneChanged={(done, id) => {
            setTodos((oldTodos) =>
              oldTodos.map((todo) => (id === todo.id ? Object.assign(todo, { done }) : todo))
            );
          }}
        />
      </div>
    </>
  );
}

export default App;
