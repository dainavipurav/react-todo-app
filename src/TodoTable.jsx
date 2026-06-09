import React from 'react';
import { useState } from 'react';

export default function TodoTable({todos, updateTodo, updateTodoStatus, deleteTodo}) {
    return (<>


        <br />
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

            <tbody key={todos.id}>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.description}</td>

                        <td
                            onClick={() => updateTodoStatus(todo.id, !todo.completed)}
                            style={{ cursor: 'pointer' }}
                        >
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={todo.completed}
                                readOnly
                                style={{ pointerEvents: 'none' }}
                            />

                            <span style={{ pointerEvents: 'none' }}>
                                &nbsp; {todo.completed ? 'Completed' : 'Pending'}
                            </span>
                        </td>
                        <td>
                            <button
                                className="btn btn-warning"
                                onClick={() => {
                                    updateTodo(todo.id);
                                }}
                            >
                                Edit
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    deleteTodo(todo.id);
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>);
}