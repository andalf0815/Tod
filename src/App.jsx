import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className='app'>
        <TodoInput
          onAddClicked={(todoText) => {
            setTodos((oldTodos) => [...oldTodos, { id: Date.now().toString(), text: todoText, done: false }]);
            console.log(todos);
          }}
        />
        <TodoList
          todos={todos}
          onDoneChanged={(done, id) => {
            setTodos((oldTodos) => oldTodos.map((todo) => (id === todo.id ? Object.assign(todo, { done }) : todo)));
          }}
          onDeleteEntry={(id) => {
            setTodos((oldTodos) => {
              return oldTodos.filter((todo) => id !== todo.id);
            });
          }}
        />
      </div>
    </>
  );
}

export default App;
