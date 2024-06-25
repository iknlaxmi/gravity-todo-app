import React, { useState } from "react";
import axios from "axios";

const AddTodo = ({ task, setTask, setUpdateData }) => {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const todo_task = {
    completed: false,
    id: { count },
    todo: `${task}`,
    userId: 5,
  };
  const headers = {
    "Content-Type": "Application/json",
  };
  const handleAddTask = () => {
    setCount(count + 1);
    const postTodoData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/todos/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(todo_task),
        });
        if (!response.ok) {
          throw new Error("Error while fetching the data");
        }
        const data = await response.json();
        console.log(data);
        setUpdateData(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    postTodoData();
    setTask("");
  };
  return (
    <div>
      <div>
        <input
          placeholder="add task"
          className="border-2 rounded-xl w-[35%] h-14 ml-[30rem] mt-10 p-2"
          onChange={handleChange}
          value={task}
        />
        <button
          className="m-8 rounded-xl bg-blue-600 w-28 h-14 text-white"
          onClick={handleAddTask}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
