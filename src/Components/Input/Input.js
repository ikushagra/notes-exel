import React from "react";
import "./Input.css";

export default function Input(props) {
  return (
    <div id="notes-input-wrapper">
      <input
        className="notes-input"
        value={props.inputValue}
        onChange={(e) => props.changeInput(e)}
        onKeyDown={(e) => props.pressEnter(e)}
      />
      <button className="add-button" onClick={() => props.addToList()}>
        Add
      </button>
    </div>
  );
}
