import React, { useState, useEffect } from "react";
import Item from "./item";
import Form from "./form";

//Initial tasks
const tasks = [
  { name: "task 1", done: false },
  { name: "task 2", done: false },
  { name: "task 3", done: true }
];

function TodoList() {
  const [todos, setTodos] = useState(tasks);
  const [inputValue, setInputValue] = useState("");

  //useEffect works basically as componentDidMount and componentDidUpdate
  useEffect(() => {
    let count = 0;
    todos.map(todo => (!todo.done ? count++ : null));
    // document.title = `할 일이 ${count} ${count > 1 ? "개" : ""} 남았습니다.`;
  });

  // input handling
  const _handleSubmit = e => {
    e.preventDefault();
    if (inputValue === "") return alert("Input some text!");

    const newArr = todos.slice();
    newArr.splice(0, 0, { name: inputValue, done: false });
    setTodos(newArr);
    setInputValue("");
  };

  // completeBtn removeBtn handling
  const _handleBntClick = ({ type, index }) => {
    const newArr = todos.slice();
    if (type === "remove") newArr.splice(index, 1);
    else if (type === "completed") newArr[index].done = true;

    return setTodos(newArr);
  };

  // style
  const formStyle = {
    width: "30em",
    color: "white",
    margin: "auto",
    padding: "2em",
    borderRadius: "0.5em",
    boxShadow: "0px 0px 10px #393f49",
    backgroundColor: "#393f49",
    listStyle: "none"
  }

  const mainStyle = {
    display: "flex",
    justifyContent: "center",
  }

  const ulStyle = {
    padding: 0,
    width: "100%",
    height: "15em",
    marginBottom: "1em",
    color: "#abafb3",
  }

  return (
    <section
    style={ formStyle}>
      <h1 style={{textAlign:"center", fontSize:"3em", color: "#75a478"}}>TodoList</h1>
      <header style={{display:'flex'}}>
        <Form
        onSubmit={_handleSubmit}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        />
      </header>
      
      <main style={mainStyle}>
        <ul style={ulStyle}>
          {todos.map((todo, index) => (
            
            <Item
              key={index}
              todo={todo}
              remove={() => _handleBntClick({ type: "remove", index })}
              completed={() => _handleBntClick({ type: "completed", index })}
            />
            
          ))}
        </ul>

      </main>
    </section>
  );
}

export default TodoList;
