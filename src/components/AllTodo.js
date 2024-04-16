import React from "react";
import Todolist from "./Todolist";
import { nanoid } from "nanoid";

export default function ({ todoList, setTodoList }) {
  function clearCompleted() {
    setTodoList((prev) => prev.filter((el) => !el.completed));
  }
  const [currentBtn, setBtn] = React.useState("all");

  function filterTodo() {
    switch (currentBtn) {
      case "all":
        return todoList;
      case "active":
        return todoList.filter((el) => !el.completed);
      case "completed":
        return todoList.filter((el) => el.completed);
      default:
        return todoList;
    }
  }

  return (
    <section className="todo">
      {filterTodo().map((el) => (
        <Todolist key={nanoid()} {...{ list: el, setTodoList }} />
      ))}
      <div className="footer flexgrp">
        <p className="no__items">{todoList.length} Items Left</p>
        <div className="footer__function flexgrp">
          <p
            className={`${currentBtn === "all" ? "pressed__btn" : ""}`}
            onClick={() => setBtn("all")}
          >
            All
          </p>
          <p
            className={`${currentBtn === "active" ? "pressed__btn" : ""}`}
            onClick={() => setBtn("active")}
          >
            Active
          </p>
          <p
            className={` ${currentBtn === "completed" ? "pressed__btn" : ""}`}
            onClick={() => setBtn("completed")}
          >
            Completed
          </p>
        </div>
        <p className="white clear__btn" onClick={clearCompleted}>
          Clear Completed
        </p>
      </div>
    </section>
  );
}
