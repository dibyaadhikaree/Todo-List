import React from "react";
import logo from "../images/icon-check.svg";

export default function ({ list, setTodoList }) {
  function handleCompleteClick() {
    setTodoList((prevTodo) =>
      prevTodo.map((el) => {
        return el.id === list.id ? { ...el, completed: !el.completed } : el;
      })
    );
  }

  return (
    <div className="todo__lists">
      <div className="list__item flexgrp">
        <div
          className={`checkbox list__checkbox ${
            list.completed ? "checkbox__checked" : ""
          }`}
          onClick={handleCompleteClick}
        >
          <img src={logo} className={`${list.completed ? "" : "hidden"}`} />
        </div>
        <p className={`${list.completed ? "checked" : ""}`}>{list.task}</p>
      </div>
    </div>
  );
}
