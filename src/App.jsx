import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Der erste Eintrag', done: true },
    { text: 'Der zweite Eintrag', done: false },
  ]);

  return (
    <>
      <div className='app'>
        <TodoInput
          onAddClicked={(todoText) => {
            setTodos((oldTodos) => [...oldTodos, { text: todoText, done: false }]);
            console.log(todos);
          }}
        />
        <TodoList
          todos={todos}
          onDoneChanged={(done, index) => {
            setTodos((oldTodos) =>
              oldTodos.map((todo, _index) => (index === _index ? Object.assign(todo, { done }) : todo))
            );
          }}
        />
      </div>
    </>
  );
}

export default App;
