import React from "react";
import classes from "./TodoList.module.css";
import Todo from "./Todo";

const TodoList = ({ todoList }) => {
  return (
    <div className={classes.todoList}>
      <h2>Todo list</h2>
      <ul>
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo}></Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
