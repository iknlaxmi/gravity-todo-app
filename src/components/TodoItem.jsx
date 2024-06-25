import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const TodoItem = ({ selectedBtn, task, toggleTaskCompletion, deleteTask }) => {
  return (
    <div>
      <li key={task.id} className="flex items-center mb-4 ml-[30rem]">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="mr-3 h-6 w-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span
          className={`${task.completed ? "line-through text-gray-500" : ""}`}
        >
          {task.todo}
        </span>
        {selectedBtn == "Completed" && (
          <TrashIcon
            onClick={() => deleteTask(task.id)}
            className="h-5 w-5 text-red-500 cursor-pointer hover:text-red-700 ml-[11rem]"
          />
        )}
      </li>
    </div>
  );
};

export default TodoItem;
