import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm.jsx';
import TodoTable from './TodoTable.jsx';

function App() {
  const [updateId, setUpdateId] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [todos, setTodos] = useState([]);

  const updateTitle = (value) => {
    setTitle(value);
  };

  const updateDescription = (value) => {
    setDescription(value);
  };

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
      <TodoForm
        title={title}
        description={description}
        updateTitle={updateTitle}
        updateDescription={updateDescription}
        addItem={addTodo}
      />
      <TodoTable
        data={todos}
        updateTodo={updateTodo}
        updateTodoStatus={updateTodoStatus}
        deleteTodo={deleteTodo}
      />
      <br />
    </>
  );
}

export default App;
