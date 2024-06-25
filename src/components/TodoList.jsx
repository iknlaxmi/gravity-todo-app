import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ selectedBtn, todoData, setTodoData, setUpdateData }) => {
  //update the task
  const toggleTaskCompletion = (id) => {
    setTodoData((prevTodoData) => {
      const updatedTodoData = prevTodoData.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );

      const updatedTask = updatedTodoData.find((task) => task.id === id);

      const updateTodoData = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/todos/${id}`, {
            method: "PUT" /* or PATCH */,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: updatedTask.completed }),
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
      updateTodoData();

      return updatedTodoData;
    });
  };

  //Delete single task
  const deleteTask = (id) => {
    const deleteTodoData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/todos/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Error while fetching the data");
        }
        const data = await response.json();
        console.log(data);

        setTodoData(todoData.filter((task) => task.id != id));
        setUpdateData(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    deleteTodoData();
  };
  return (
    <div>
      {selectedBtn === "All" &&
        todoData.map((task) => (
          <TodoItem
            selectedBtn={selectedBtn}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))}
      {selectedBtn === "Pending" &&
        todoData
          .filter((task) => !task.completed)
          .map((task) => (
            <TodoItem
              selectedBtn={selectedBtn}
              task={task}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
          ))}
      {selectedBtn === "Completed" &&
        todoData
          .filter((task) => task.completed)
          .map((task) => (
            <TodoItem
              selectedBtn={selectedBtn}
              task={task}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
          ))}
    </div>
  );
};

export default TodoList;
