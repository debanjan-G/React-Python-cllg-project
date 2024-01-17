import Header from "./components/Header";
import Input from "./components/Input";
import "./app.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";

const App = () => {
  const [toDoItem, setToDoItem] = useState({
    item: "",
    date: "",
  });
  const [toDoList, setToDoList] = useState([
    // {
    //   item: "Buy Milk",
    //   date: "16-01-2024",
    // },
  ]);

  const handleAddClick = (toDoItem) => {
    setToDoList((prev) => [...prev, toDoItem]);
    setToDoItem({
      item: "",
      date: "",
    });
  };

  return (
    <center className="todo-container">
      <Header />
      <Input
        handleAddClick={handleAddClick}
        inputVal={toDoItem}
        setInputVal={setToDoItem}
      />
      <ToDoItems itemsArray={toDoList} updateList={setToDoList} />
    </center>
  );
};

export default App;
