import React from 'react';
import TodoRow from './TodoRow.jsx';

export default function TodoTable(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody key={props.data.id}>
        {props.data.map((todo) => (
          <TodoRow
            todo={todo}
            updateTodoStatus={props.updateTodoStatus}
            updateTodo={props.updateTodo}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
}
