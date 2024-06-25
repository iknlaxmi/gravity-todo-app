import React, { useState } from "react";
//Filter tasks: All, Pending,completed
const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      {" "}
      <div className="flex m-1 justify-center mt-10">
        <button
          className={
            filter == "All"
              ? "mx-12 border-b-4 border-blue-500 w-[70px] p-1"
              : "mx-12"
          }
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={
            filter == "Pending"
              ? "mx-12 border-b-4 border-blue-500 w-[70px] p-1"
              : "mx-12"
          }
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>
        <button
          className={
            filter == "Completed"
              ? "mx-12 border-b-4 border-blue-500 w-[100px] p-1"
              : "mx-12"
          }
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </div>
      <hr className="w-[38%] ml-[30rem] -mt-1" />
    </div>
  );
};

export default Filter;
