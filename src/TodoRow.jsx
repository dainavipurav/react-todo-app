import React from 'react';

export default function TodoRow(props) {
  return (
    <tr key={props.todo.id}>
      <td>{props.todo.id}</td>
      <td>{props.todo.title}</td>
      <td>{props.todo.description}</td>

      <td
        onClick={() =>
          props.updateTodoStatus(props.todo.id, !props.todo.completed)
        }
        style={{ cursor: 'pointer' }}
      >
        <input
          className="form-check-input"
          type="checkbox"
          checked={props.todo.completed}
          readOnly
          style={{ pointerEvents: 'none' }}
        />

        <span style={{ pointerEvents: 'none' }}>
          &nbsp; {props.todo.completed ? 'Completed' : 'Pending'}
        </span>
      </td>
      <td>
        <button
          className="btn btn-warning"
          onClick={() => {
            props.updateTodo(props.todo.id);
          }}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            props.deleteTodo(props.todo.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
