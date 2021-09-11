import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import List from "./Components/List/List";
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    let d = JSON.parse(localStorage.getItem("ourList"));
    setList(d);
  }, []);

  useEffect(() => {
    localStorage.setItem("ourList", JSON.stringify(list));
  }, [addToList]);

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  function addToList() {
    const d = new Date();
    let data = {
      myKey: d.getTime(),
      note: inputValue
    };

    setList([...list, data]);
  }

  const pressEnter = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      if (inputValue === "") {
        alert("enter a value");
      } else {
        addToList();
      }
    }
  };
  const selected = (index, key) => {
    let [...arr2] = list;
    arr2.splice(index, 1);
    localStorage.setItem("ourList", JSON.stringify(arr2));
    setList(arr2);
  };

  const edit = (index, key) => {
    let text = prompt("", "india");

    let [...arr3] = list;
    // arr3.splice(index,1,text)
    arr3[index].myKey = key;
    arr3[index].note = text;

    setList(arr3);
    localStorage.setItem("ourList", JSON.stringify(arr3));
  };

  return (
    <div className="App">
      <div className="border">
        <h1>Notes App</h1>
        <Input
          changeInput={changeInput}
          pressEnter={pressEnter}
          addToList={addToList}
          inputValue={inputValue}
        />
        <List selected={selected} list={list} edit={edit} />
      </div>
    </div>
  );
}
