import { useState } from 'react';
import './App.css';

function App() {
  const [updateId, setUpdateId] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [todos, setTodos] = useState([]);

  const clearFields = () => {
    setUpdateId();
    setTitle('');
    setDescription('');
  };

  const addTodo = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Please add details');
      return;
    }

    if (updateId != undefined) {
      const updatedList = todos.map((item, index) => {
        if (item.id === updateId) {
          return { ...item, title, description };
        } else {
          return item;
        }
      });

      setTodos(updatedList);

      clearFields();

      return;
    }

    const id = Math.floor(Math.random() * 100000);

    const todo = {
      id: id,
      title: title,
      description: description,
      completed: false,
    };

    setTodos((prev) => [...prev, todo]);

    clearFields();
  };

  const deleteTodo = (id) => {
    const result = confirm('Are you sure you want to delete this item?');

    if (result) {
      const updatedTodos = todos.filter((item) => item.id != id);
      setTodos((prev) => updatedTodos);
    }
  };

  const updateTodo = (id) => {
    const data = todos.find((item) => item.id === id);

    setUpdateId(id);
    setTitle(data.title);
    setDescription(data.description);
  };

  const updateTodoStatus = (id, value) => {
    console.log(`id ${id}`);
    console.log(`value ${value}`);
    const updated = todos.map((item, index) =>
      item.id === id ? { ...item, completed: value } : item
    );

    setTodos(updated);
  };

  return (
    <>
      <br />
      <div className="mb-3 mx-3">
        <label for="title" className="form-label">
          Title
        </label>
        <input
          type="title"
          className="form-control"
          id="title"
          value={title}
          onChange={(val) => setTitle(val.target.value)}
        />
      </div>

      <div className="mb-3 mx-3">
        <label for="description" className="form-label">
          Description
        </label>
        <input
          type="description"
          className="form-control"
          id="description"
          value={description}
          onChange={(val) => setDescription(val.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary mx-3" onClick={addTodo}>
        Add
      </button>
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
    </>
  );
}

export default App;
