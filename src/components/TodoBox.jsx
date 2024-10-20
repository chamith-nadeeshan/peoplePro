import React, { useState } from "react";
import MainButton from "../components/MainButton";

import todoImg from "../assets/listImg.png";
import MainButtonWithOutline from "./MainButtonWithOutline";

const TodoBox = ({ onClick, todos, todoCompleted, transitioning }) => {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div className="bg-[#F2F4FD] p-3 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2 items-center">
          <img className="h-5 w-5" src={todoImg} alt="loudspeaker" />
          <p className="font-normal text-[14px]">Your to-Do list</p>
        </div>
        <input
          className="bg-[#F2F4FD] text-[12px] font-medium text-gray-600 w-24"
          type="date"
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="h-52 overflow-y-auto hide-scrollbar">
        {todos
          .filter((todo) => {
            const todoDate = new Date(todo.date).toISOString().split("T")[0];
            return todoDate === selectedDate;
          })
          .sort((a, b) => {
            const timeA = a.time.split(":").map(Number); // Assuming time is in 'HH:MM' format
            const timeB = b.time.split(":").map(Number);
            
            // Sort based on hours first, then minutes if hours are equal
            return timeA[0] - timeB[0] || timeA[1] - timeB[1];
          })
          .map((todo, index) => (
            <div
              key={todo._id}
              className={`bg-white mb-2 rounded-md p-2 flex justify-between transition-transform duration-300 ${
                transitioning === todo._id ? "transform scale-0" : ""
              }`}
            >
              <div>
                <p className="text-[12px] font-medium">{todo.task}</p>
                <p className="text-[12px] font-light text-gray-500">
                  Time - {todo.time}
                </p>
              </div>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => todoCompleted(todo._id)} // You can define this handler
              />
            </div>
          ))}
      </div>
      <div className="h-10 mb-5">
        <MainButton className="h-6 py-2" onClick={onClick}>
          Add
        </MainButton>
      </div>
    </div>
  );
};

export default TodoBox;
