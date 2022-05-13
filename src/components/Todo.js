import React from "react";
import classes from "./Todo.module.css";

const Todo = ({ todo }) => {
  return (
    <li
      className={classes.todo}
      style={{
        borderLeft:
          todo.status == "done"
            ? "5px solid lightGreen"
            : todo.status == "not started"
            ? "5px solid red"
            : "5px solid orange",
      }}
    >
      <h3 className={classes.title}>{todo.title}</h3>
      <p className={classes.deadline}>{todo.deadline}</p>
    </li>
  );
};

export default Todo;
