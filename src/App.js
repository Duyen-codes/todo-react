import "./App.css";
import Button from "./UI/Button";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [open, setOpen] = useState(false);

  const handleAddTodo = (todoTitle, todoDeadline, todoStatus) => {
    setTodoList((prevTodoList) => {
      return [
        ...prevTodoList,
        {
          title: todoTitle,
          deadline: todoDeadline,
          status: todoStatus,
          id: Math.floor(Math.random() * 100),
        },
      ];
    });
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Button onClick={() => setOpen(!open)}>Add todo</Button>
      {open && (
        <AddTodo onAddTodo={handleAddTodo} onCancel={handleCancel}></AddTodo>
      )}
      <TodoList todoList={todoList}></TodoList>
      <div className="indicators">
        <p>Not started</p>
        <p>Done</p>
        <p>In progress</p>
      </div>
    </div>
  );
}

export default App;
