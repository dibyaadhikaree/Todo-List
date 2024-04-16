import React from "react";

export default function ({ createTodo }) {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!(e.key === "Enter" )) return;
    createTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="create__todo flexgrp">
      <div className="checkbox" id="create__checkbox">
        <img src="images/icon-check.svg" className="hidden" />
      </div>
      <input
        type="text"
        placeholder="Create a todo...."
        value={inputValue}
        id="new_todo"
        onChange={handleInputChange}
        onKeyDown={handleSubmit}
      />
    </div>
  );
}
