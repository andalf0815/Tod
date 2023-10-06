function TodoList(props) {
  return (
    <div>
      <TodoEntryList todos={props.todos} onDoneChanged={props.onDoneChanged} filterFunction={(todo) => !todo.done}/>
      <hr />
      <TodoEntryList todos={props.todos} onDoneChanged={props.onDoneChanged} filterFunction={(todo) => todo.done} />
    </div>
  );
}

function TodoEntryList(props) {
  console.log(props)
  return (
    <dir>
      {props.todos
        .filter(props.filterFunction)
        .map((todo) => (
          <div key={todo.id}>
            <input
              type='checkbox'
              checked={todo.done}
              onChange={(event) => {
                const checked = event.target.checked;
                props.onDoneChanged && props.onDoneChanged(checked, todo.id);
              }}
            ></input>
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
          </div>
        ))}
    </dir>
  );
}

export default TodoList;
