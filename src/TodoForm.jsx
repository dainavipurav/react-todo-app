import React from 'react';
import TextField from './TextField.jsx';

export default function TodoForm(props) {
  return (
    <>
      <TextField
        label="Title"
        value={props.title}
        onChange={(val) => props.updateTitle(val.target.value)}
      />

      <TextField
        label="Description"
        value={props.description}
        onChange={(val) => props.updateDescription(val.target.value)}
      />

      <button
        type="submit"
        className="btn btn-primary mx-3"
        onClick={props.addItem}
      >
        Add
      </button>
    </>
  );
}
