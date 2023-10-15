import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    setTodos(loadTodos());
  }, []);
  return (
    <>
      <div className='app'>
        <TodoInput
          onAddClicked={(todoText) => {
            setTodos((oldTodos) => {
              const newTodos = [...oldTodos, { id: Date.now().toString(), text: todoText, done: false }];
              save(newTodos);
              return newTodos;
            });
          }}
        />
        <TodoList
          todos={todos}
          onDoneChanged={(done, id) => {
            setTodos((oldTodos) => {
              const newTodos = oldTodos.map((todo) => (id === todo.id ? Object.assign(todo, { done }) : todo));
              save(newTodos);
              return newTodos;
            });
          }}
          onDeleteEntry={(id) => {
            setTodos((oldTodos) => {
              const newTodos = oldTodos.filter((todo) => id !== todo.id);
              save(newTodos);
              return newTodos;
            });
          }}
        />
      </div>
    </>
  );
}

export default App;

function save(todos) {
  window.localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
  return JSON.parse(window.localStorage.getItem('todos'));
}
