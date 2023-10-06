function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <div key={index}>
          <input
            type='checkbox'
            checked={todo.done}
            onChange={(event) => {
              const checked = event.target.checked;
              props.onDoneChanged && props.onDoneChanged(checked, index);
            }}
          ></input>
          <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
