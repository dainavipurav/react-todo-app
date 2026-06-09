import React from 'react';
import {useState} from 'react';

export default function TodoForm(props){
    return (<>
        <div className="mb-3 mx-3">
            <label htmlFor="title" className="form-label">
                Title
            </label>
            <input
                type="title"
                className="form-control"
                id="title"
                value={props.title}
                onChange={(val) => props.updateTitle(val.target.value)}
            />
        </div>

        <div className="mb-3 mx-3">
            <label htmlFor="description" className="form-label">
                Description
            </label>
            <input
                type="description"
                className="form-control"
                id="description"
                value={props.description}
                onChange={(val) => props.updateDescription(val.target.value)}
            />
        </div>

        <button type="submit" className="btn btn-primary mx-3" onClick={props.addTodo}>
            Add
        </button></>);  
}