import React from "react";

export default function Item(props) {
  const { name, done } = props.todo;

  const checkBtnStyle = {
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#75a478",
    color: "white",
    margin: "0.5em",
    padding: "1em 2em",
    outline: "none",
    fontSize: "1em",
  }
  const removeBtnStyle = {
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#75a478",
    color: "white",
    margin: "0.5em",
    padding: "1em 2em",
    outline: "none",
    fontSize: "1em",
    transform: "translate(15em)"
  }

  const wrapStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "30em"
  }

  const btnWrapStyle = {
    display: "flex",
    justifyContent: "flex-end"
  }


  const ulStyle = {
    borderTop: "1px solid #abafb3",
    display: "flex",
    textDecoration: done ? "line-through" : "", width: "80%",
    listStyle: "none"
  }

  return (

    <div style={wrapStyle}>
      <ul style={ulStyle}>
        <li>
          <div>
          {name}
          {!done ? 
            
              <button 
                onClick={props.completed}
                style={checkBtnStyle}
                >
                ✔
              </button> : ""}
              
              <button 
                onClick={props.remove}
                style={removeBtnStyle}
                >
                ❌
              </button>
            </div>
        </li>
      </ul>
    </div>


  );
}
