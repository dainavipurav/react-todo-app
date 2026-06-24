import React from 'react';

export default function TextField(props) {
  return (
    <>
      <div className="mb-3 mx-3">
        <label htmlFor={props.label} className="form-label">
          {props.label}
        </label>
        <input
          type="text"
          className="form-control"
          id={props.label}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
}
