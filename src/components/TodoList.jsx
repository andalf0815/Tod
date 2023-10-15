import '../styles/TodoList.min.css';

function TodoList(props) {
  return (
    <div className='todo-lists'>
      <TodoEntryList
        todos={props.todos}
        onDoneChanged={props.onDoneChanged}
        onDeleteEntry={props.onDeleteEntry}
        filterFunction={(todo) => !todo.done}
      />
      <hr />
      <TodoEntryList
        todos={props.todos}
        onDoneChanged={props.onDoneChanged}
        onDeleteEntry={props.onDeleteEntry}
        filterFunction={(todo) => todo.done}
      />
    </div>
  );
}

function TodoEntryList(props) {
  return (
    <div className='todo-list'>
      {props.todos.filter(props.filterFunction).map((todo) => (
        <div className='todo-entry' key={todo.id}>
          <label>
            <input
              type='checkbox'
              checked={todo.done}
              onChange={(event) => {
                const checked = event.target.checked;
                props.onDoneChanged && props.onDoneChanged(checked, todo.id);
              }}
            ></input>
            <span style={{ color: todo.done ? 'gray' : 'black', textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </label>
          <button
            className='btn-delete'
            onClick={() => {
              props.onDeleteEntry && props.onDeleteEntry(todo.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
