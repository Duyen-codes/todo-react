import "./App.css";
import Button from "./UI/Button";
import AddTodoForm from "./components/AddTodoForm";
import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState({
    title: "",
    deadline: "",
    status: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    console.log("input change");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
  };

  const handleCancel = (e) => {
    console.log("cancel click");
  };
  return (
    <div className="App">
      <Button>Add todo</Button>
      <AddTodoForm
        onSubmit={handleFormSubmit}
        onChange={handleInputChange}
        onCancel={handleCancel}
      ></AddTodoForm>
    </div>
  );
}

export default App;
