import React from "react";
import AllTodo from "./AllTodo";
import CreateTodo from "./CreateTodo";
import logo from "../images/icon-moon.svg";
import { nanoid } from "nanoid";

export default function () {
  const [todoList, setTodoList] = React.useState([]);

  function createTodo(text) {
    const newTodo = {
      task: text,
      completed: false,
      id: nanoid(),
    };

    setTodoList((prevTodo) => [newTodo, ...prevTodo]);
  }

  return (
    <section className="container">
      <div className="heading flexgrp">
        <h1>Todo</h1>
        <img src={logo} />
      </div>

      <CreateTodo {...{ createTodo }} />

      <AllTodo {...{ todoList, setTodoList }} />

      <p className="bottomtext">Drag and drop to reorder list</p>
    </section>
  );
}
