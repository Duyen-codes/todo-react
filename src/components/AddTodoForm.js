import React from "react";
import Button from "../UI/Button";

const AddTodoForm = (props) => {
  return (
    <div>
      <h2>Add new todo</h2>
      <form action="" onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={props.title}
          onChange={props.onChange}
        />
        <input
          type="text"
          placeholder="deadline"
          name="deadline"
          value={props.deadline}
          onChange={props.onChange}
        />
        <select
          name="status"
          id="status"
          value={props.status}
          onChange={props.onChange}
        >
          <option hidden defaultValue={""}>
            Status
          </option>
          <option value="done">Done</option>
          <option value="not started">Not started</option>
          <option value="in progress">In progress</option>
        </select>
        <Button onClick={props.onCancel}>Cancel</Button>
        <Button onClick={props.onSubmit}>Add</Button>
      </form>
    </div>
  );
};

export default AddTodoForm;
