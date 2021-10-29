import React from "react";

export default function Form(props) {

  const inputStyle = {
    width: "70%",
    padding: "1em 0.5em",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "white",
    outline: "none",
    color: "#abafb3",
    fontSize: "1em",
    display: "flex",
    justifyContents: "center"
  }

  const btnStyle = {
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#75a478",
    color: "white",
    marginLeft: "1em",
    padding: "1em 2em",
    outline: "none",
    fontSize: "1em",
    
  }

  const formStyle = {
    display: "flex",
    width: "90%",
    color: "white",
    margin: "auto",
    borderRadius: "0.5em 0.5em 0 0",
    boxShadow: "0px 0px 10px #393f49",
    backgroundColor: "#393f49"
  }

  return (
    <form 
      style={formStyle}
      onSubmit={props.onSubmit}>
      <input
        style={inputStyle}
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="input some text..."
      />
      <button 
        type="submit"
        style={btnStyle}
        >Add</button>
    </form>
  );
}
