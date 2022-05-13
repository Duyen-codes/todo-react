import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./AddTodo.module.css";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");

  const addTodoHandler = (event) => {
    event.preventDefault(); // prevent reload the page
    console.log("form submit");
    props.onAddTodo(title, deadline, status);
    setTitle("");
    setDeadline("");
    setStatus("");
  };

  const titleChangeHandler = (event) => {
    console.log("title change");
    setTitle(event.target.value);
  };

  const deadlineChangeHandler = (event) => {
    console.log("deadline change");
    setDeadline(event.target.value);
  };

  const statusChangeHandler = (event) => {
    console.log("status change");
    setStatus(event.target.value);
    console.log("status:", event.target.value);
  };

  return (
    <div className={classes.addTodo}>
      <h2>Add new todo</h2>
      <form action="" onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={props.title}
          onChange={titleChangeHandler}
        />
        <input
          type="text"
          placeholder="deadline"
          name="deadline"
          value={props.deadline}
          onChange={deadlineChangeHandler}
        />
        <select
          name="status"
          id="status"
          value={props.status}
          onChange={statusChangeHandler}
        >
          <option hidden defaultValue={""}>
            Status
          </option>
          <option value="done">Done</option>
          <option value="not started">Not started</option>
          <option value="in progress">In progress</option>
        </select>
        <div>
          <Button onClick={props.onCancel}>Cancel</Button>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
