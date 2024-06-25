import React, { useState, useEffect } from "react";

import Filter from "./Filter";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [selectedBtn, setSelectedBtn] = useState("All");
  const [task, setTask] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [updateData, setUpdateData] = useState(false);

  //Get the todo data from the server
  useEffect(() => {
    const fetchTodoData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        if (!response.ok) {
          throw new Error("Error while fetching the data");
        }
        const data = await response.json();
        console.log(data);
        setTodoData(data.todos);
        localStorage.setItem("todos", JSON.stringify(data.todos));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTodoData();
  }, [updateData]);

  return (
    <div>
      <Filter filter={selectedBtn} setFilter={setSelectedBtn} />
      <AddTodo task={task} setTask={setTask} setUpdateData={setUpdateData} />
      <TodoList
        selectedBtn={selectedBtn}
        todoData={todoData}
        setTodoData={setTodoData}
        setUpdateData={setUpdateData}
      />
    </div>
  );
};

export default TodoApp;
