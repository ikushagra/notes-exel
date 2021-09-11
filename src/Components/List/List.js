import React from "react";
import "./List.css";

export default function List(props) {
  return (
    <div id="list-wrapper">
      {props.list.map((x, index) => (
        <div className="added-note-container" key={index}>
          <input className="list-input" readOnly value={x.note} type="text" />
          <button
            className="add-button"
            onClick={() => props.selected(index, x.myKey)}
          >
            Delete
          </button>
          <button
            className="add-button"
            key={index}
            onClick={() => props.edit(index, x.myKey)}
          >
            edit
          </button>
        </div>
      ))}
    </div>
  );
}
